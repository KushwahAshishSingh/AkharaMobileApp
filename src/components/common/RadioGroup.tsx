import React, { useState } from 'react';
import { PixelRatio, Pressable, StyleSheet, Text, View } from 'react-native';

import { RadioButtonProps, RadioGroupProps } from './common_types';
import { useEffect } from 'react';
import { moderateScale } from '../../utils/helpers';

const checkAndPassColor = (selected, checked) => {
  if (checked !== undefined) {
    if (selected && selected === checked) {
      return 'green';
    } else if (selected && selected !== checked) {
      return 'red';
    } else if (checked) {
      return 'green';
    }
  } else {
    return '#FA693D';
  }
};
const RadioGroup = (props: RadioGroupProps) => {
  const { containerStyle, layout = 'column', onPress, radioButtons } = props;
  const [radioButtonsLocal, setRadioButtonsLocal] = useState<
    RadioButtonProps[]
  >(props.radioButtons);

  useEffect(() => {
    const selectedHandle = radioButtonsLocal;
    const res = selectedHandle.map((val, i) => {
      return {
        ...val,
        selected: val.selected || radioButtons[i]?.isCorrect,
        disabled: !!radioButtons[i]?.isCorrect,
        color: checkAndPassColor(val.selected, radioButtons[i]?.isCorrect),
      };
    });
    console.log(radioButtons, 'asdfasf', selectedHandle, 'this is res ======');
    setRadioButtonsLocal(res);
  }, [props.loading]);

  function handlePress(id: string) {
    for (const button of radioButtonsLocal) {
      console.log(radioButtons, button, 'this is radio buttons ');
      if (button.selected && button.id === id) {
        return;
      }
      button.selected = button.id === id;
    }
    setRadioButtonsLocal([...radioButtonsLocal]);
    if (onPress) {
      onPress(radioButtonsLocal);
    }
  }

  return (
    <View style={[{ flexDirection: layout }, containerStyle]}>
      {radioButtonsLocal.map(button => (
        <RadioButton
          {...button}
          key={button.id}
          onPress={(id: string) => {
            handlePress(id);
            if (button.onPress && typeof button.onPress === 'function') {
              button.onPress(id);
            }
          }}
        />
      ))}
    </View>
  );
};

export default RadioGroup;

export const RadioButton = ({
  borderColor,
  color, //= '#FA693D',
  containerStyle,
  description,
  descriptionStyle,
  disabled = false,
  id,
  label,
  labelStyle = styles.labelStyle,
  layout = 'row',
  onPress,
  selected = false,
  size = 24,
  isCorrect = false,
}: RadioButtonProps) => {
  const borderWidth = PixelRatio.roundToNearestPixel(size * 0.1);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  let orientation: any = { flexDirection: 'row' };
  let margin: any = { marginLeft: 10, fontFamily: 'Lato' };

  if (layout === 'column') {
    orientation = { alignItems: 'center' };
    margin = { marginTop: 10 };
  }

  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  console.log(isCorrect, selected, 'this is current ++===');

  return (
    <>
      <Pressable
        onPress={handlePress}
        style={[
          styles.container_radio,
          orientation,
          { opacity: disabled ? 0.8 : 1 },
          containerStyle,
        ]}>
        <View
          style={[
            styles.border,
            {
              borderColor: borderColor || color,
              borderWidth,
              width: sizeFull,
              height: sizeFull,
              borderRadius: sizeHalf,
              backgroundColor: '#232323',
            },
          ]}>
          {selected && (
            <View
              style={{
                //color,
                backgroundColor: color,
                width: sizeHalf,
                height: sizeHalf,
                borderRadius: sizeHalf,
              }}
            />
          )}
        </View>
        {Boolean(label) && (
          <Text style={[margin, labelStyle, { color: '#C9C9C9' }]}>
            {label}
          </Text>
        )}
      </Pressable>
      {Boolean(description) && (
        <Text style={[margin, descriptionStyle]}>{description}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container_radio: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  border: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: moderateScale(14),
  },
});

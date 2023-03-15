// eslint-disable-next-line prettier/prettier
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale } from '../../utils/helpers';

interface PropsI {
  title: string | Element;
}
export const PrimaryButton = ({ title, customFont, props, ...rest }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} {...rest}>
        <Text
          style={[
            styles.font_style,
            customFont
              ? { fontSize: moderateScale(customFont) }
              : { fontSize: moderateScale(16) },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FA693D',
    borderRadius: 10,
    borderWidth: 1,
    borderHeight: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  font_style: {
    fontSize: moderateScale(16),
    fontFamily: 'Lato',
    letterSpacing: 0.4,
    color: 'white',
  },
});

// eslint-disable-next-line prettier/prettier
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {moderateScale} from '../../../utils/helpers';

interface PropsI {
  title: string | Element;
  customIcon: any;
  customFont: string | Element;
  backColor: string | Element;
}
export const TradingCard = ({
  title,
  customIcon,
  customFont,
  backColor,
}: PropsI) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.container, {backgroundColor: backColor}]}>
        {customIcon}
        <Text
          style={[
            styles.font_style,
            customFont ? {color: customFont} : {color: '#19A684'},
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 148,
    height: 109,
    borderRadius: 12,
    borderWidth: 1,
    margin: 6,
    borderColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  font_style: {
    fontSize: moderateScale(10),
    letterSpacing: 0.4,
    color: 'white',
    fontFamily: 'Lato',
    paddingTop: 14,
  },
});

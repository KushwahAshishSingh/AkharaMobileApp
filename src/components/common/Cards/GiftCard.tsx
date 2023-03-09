/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {moderateScale} from '../../../utils/helpers';

interface PropsI {
    Customtitle: string | Element;
    subTitle: string | Element;
    LeftIcon: string | Element;
    RightArrow: string | Element;
    customHeight : number;
    extraPadding: number;
}
export const GiftCard = ({
  Customtitle,
  subTitle,
  LeftIcon,
  RightArrow,
  customHeight,
  extraPadding,
}: PropsI) => {
  return (
    <View>

<View style={[styles.container,{ height:customHeight? customHeight : 32,}]}>
            <View style={styles.main_container}>
              <View style={styles.sub_container}>
                {LeftIcon}
                 <View>
                 <View style={[styles.row_flex,{paddingLeft:extraPadding ? extraPadding : 0}]}>
                 {Customtitle}
                  </View>
                  <View style={[styles.row_flex,{paddingLeft: extraPadding? extraPadding : 0}]}>
                  {subTitle}
                  </View>
                 </View>
              </View>
            </View>
            <View style={styles.right_container}>
            <TouchableOpacity>
            {RightArrow}
            </TouchableOpacity>
            </View>
         </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderColor: '#F5F5F5',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:342,
  },
  main_container: {flexDirection:'row', justifyContent:'center', alignItems:'center'},
  sub_container: {
    paddingLeft:12, flexDirection:'row'
  },
  row_flex:{
    flexDirection:'row'
  },
  font_style: {
    fontSize: moderateScale(10),
    letterSpacing: 0.4,
    color: 'white',
    fontFamily: 'Lato',
    paddingTop: 14,
  },
  right_container: {height:'100%', alignItems:'center', justifyContent:'center', marginTop:'2%'},
});

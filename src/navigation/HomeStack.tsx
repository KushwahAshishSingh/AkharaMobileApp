/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, TouchableOpacity, Platform, Text, StyleSheet} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {HomeStackNavigatorParamList} from './types';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Or_code from '../../assets/icons/Or_code';
import Fi_bell from '../../assets/icons/Fi_bell';
import { windowWidth } from '../utils/Dimension';
const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();
const HomeStackNavigator = () => {
  const navigation = useNavigation();
  let primary_color = '#FFFFFF';
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: primary_color,
          },
          headerShadowVisible: false,
          headerTintColor: primary_color,
          headerLeft: () => (
            <View style={styles.left_container}>
              <View style={Platform.OS === 'ios' && {paddingBottom: 10}}>
                <View style={styles.custom_height}>
                  <Text style={styles.heading}>Hello</Text>
                  <Text style={styles.sub_heading}>Oxbc...OOf2</Text>
                </View>
              </View>
              <View>

              </View>
            </View>
          ),
          headerRight: () => (
            <View style={styles.right_container}>
              <TouchableOpacity
                style={Platform.OS === 'ios' && {paddingBottom: 10}}>
                <View style={styles.right_custom_padding}>
                  <Fi_bell />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() => navigation.navigate('QrScanner')}

                style={Platform.OS === 'ios' && {paddingBottom: 10}}>
                <View style={styles.custom_height}>
                  <Or_code />
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'rgba(64, 64, 64, 0.5)',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  sub_heading: {color: '#231F1E', fontSize: 20, fontFamily: 'Lato-Regular'},
  left_container: {marginLeft: 8, backgroundColor:'red', width:windowWidth/2},
  right_container: {flexDirection: 'row', marginTop: 10, marginRight: 10},
  font500Size14: {
    fontWeight: '500',
    fontSize: 14,
  },
  font500Size10: {
    fontWeight: '500',
    fontSize: 10,
  },
  font400Size14: {
    fontWeight: '400',
    fontSize: 14,
  },
  font600Size14: {
    fontWeight: '600',
    fontSize: 14,
  },
  custom_height: {
    height: 40,
  },
  right_custom_padding: {width: 40, height: 40},
});

export default HomeStackNavigator;

/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabNavigationParam} from './types';
import HomeStackNavigator from './HomeStack';
import Media from '../screens/Media';
import Members from '../screens/Members';
import Setting from '../screens/Setting';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Piechart from '../../assets/icons/Piechart';
import Vector1 from '../../assets/icons/Vector1';
import Vector2 from '../../assets/icons/Vector2';
import Vector3 from '../../assets/icons/Vector3';
import { windowWidth } from '../utils/Dimension';
const Tab = createBottomTabNavigator<BottomTabNavigationParam>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarBadge: '',
        }}
      />
      <Tab.Screen
        name="Media"
        component={Media}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Members"
        component={Members}
        options={{
          headerShadowVisible: false,
          headerTintColor: '#FFFFFF',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarBadge: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

function MyTabBar({state, descriptors, navigation}) {
  const returnIcon = (name: string, color: string) => {
    switch (name) {
      case 'Home':
        return <Vector1 color={color} />;
      case 'Media':
        return <Piechart color={color} />;
      case 'Members':
        return <Vector2 color={color} />;
      case 'Settings':
        return <Vector3 color={color} />;
      default:
        break;
    }
  };
  return (
    <>
      <View style={styles.container}/>
      {/* { children } */}
      <View style={styles.row_flex}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.bottom_container}>
              <View
                style={styles.bottom_sub_container}>
                  <View
                    style={styles.bottom_icon}>
                    {returnIcon(label, isFocused ? '#0052FE' : '#000000')}
                  </View>
                <Text
                  style={[styles.bottom_text,{color: isFocused ? '#0052FE' : '#000000',fontWeight: isFocused ? '700' : '500',}]}>
                    {label}
                  </Text>
                </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
 container: {width: '80%', height:3, backgroundColor:'#F5F5F5' },
row_flex:{flexDirection: 'row'},
bottom_container:{flex: 1, paddingVertical: 10, backgroundColor: '#FFFFFF'},
bottom_sub_container:{
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  width: windowWidth / 4,
  marginBottom:20,
  marginTop:3,
},
bottom_icon:{
    width: 25,
    height: 30,
    justifyContent: 'center',
    alignItems:'center',
},
bottom_text:{
  fontSize: 12,
},
})
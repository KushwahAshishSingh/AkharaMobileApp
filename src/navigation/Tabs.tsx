/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabNavigationParam} from './types';
import Media from '../screens/Media';
import Members from '../screens/Members';
import Setting from '../screens/Setting';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Piechart from '../../assets/icons/Piechart';
import Vector1 from '../../assets/icons/Vector1';
import Vector2 from '../../assets/icons/Vector2';
import Vector3 from '../../assets/icons/Vector3';
import Fi_bell from '../../assets/icons/Fi_bell';
import { windowWidth } from '../utils/Dimension';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feeds from '../screens/home/Feeds';
import MyFeeds from '../screens/home/MyFeeds';
import MediaImages from '../screens/media/MediaImages';
import MediaVideos from '../screens/media/MediaVideos';
const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator<BottomTabNavigationParam>();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Feeds" component={Feeds} />
      <TopTab.Screen name="My Feeds" component={MyFeeds} />
    </TopTab.Navigator>
  );
};

const TopTabMediaNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Images" component={MediaImages} />
      <TopTab.Screen name="Videos" component={MediaVideos} />
    </TopTab.Navigator>
  );
};

const BottomTabs = () => {
  let primary_color = '#FFFFFF';
  return (
    
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}>
      <TopTab.Screen name="Home" component={TopTabNavigator}
      options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: primary_color,
        },
        headerShadowVisible: false,
        headerTintColor: primary_color,
        headerLeft: () => (
          <View style={styles.left_container}>
              <View style={[styles.custom_height,{padding:8}]}>
                <Text style={styles.sub_heading}>Akhara</Text>
              </View>
          </View>
        ),
        headerRight: () => (
          <View style={styles.right_container}>
            <View style={{alignItems:'flex-end'}}>
            <TouchableOpacity
             >
              <View style={styles.right_custom_padding}>
                <Fi_bell />
              </View>
            </TouchableOpacity>
            </View>
          </View>
        ),
      }}
      />
      <TopTab.Screen
        name="Media"
        component={TopTabMediaNavigator}
        options={{
          headerTitle: () => (
            <View style={{flex: 1,
              height: "100%",
              flexDirection: "row",
              alignItems: "center"}}>
              <View>
                <Text style={styles.sub_heading}>Akhara</Text>
              </View>
            </View>
          ), 
        
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
        return <Vector2 color={color} />;
      case 'Members':
        return <Piechart color={color} />;
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
 container: {width: '100%', height:3, backgroundColor:'#F5F5F5' },
row_flex:{flexDirection: 'row'},
bottom_container:{flex: 1, paddingVertical: 10, backgroundColor: '#FFFFFF',},
bottom_sub_container:{
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  width: windowWidth / 4,
  marginBottom:20,
  marginTop:3,

},
bottom_icon:{
    width: 30,
    paddingLeft:5,
    height: 30,
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:'center',
    textAlign:'center',
  
},
bottom_text:{
  fontSize: 12,
},


  heading: {
    color: 'rgba(64, 64, 64, 0.5)',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  sub_heading: {color: '#231F1E', fontSize: 20, fontFamily: 'Lato-Regular',fontWeight:'600' },
  left_container: { width:windowWidth/2.2},
  right_container: { width:windowWidth/2.2},
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
  right_custom_padding: {width: 40, height: 40, paddingTop:6},
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';


export type HomeStackNavigatorParamList = {
  Home: undefined;
};

export type BottomTabNavigationParam = {
  Media: undefined;
  Members: undefined;
  Settings: undefined;
};
export type BottomTabNavigatorPropsI = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList>,
  BottomTabNavigationProp<BottomTabNavigationParam>
>;

export type MainNavigatorStack = {
  BottomTabStack: BottomTabNavigatorPropsI;
  Feeds: undefined;
  MyFeeds: undefined;
  // QrScanner: undefined;
};

export type NavigationPropI = CompositeNavigationProp<
  NativeStackNavigationProp<MainNavigatorStack>,
  BottomTabNavigatorPropsI
>;

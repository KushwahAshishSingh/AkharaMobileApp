import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabs from './Tabs';
import { MainNavigatorStack } from './types';
import { navigationRef } from './RootNavigation';
// import {QrScanner} from '../components/QrScanner';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const Stack = createNativeStackNavigator<MainNavigatorStack>();

const RootNavigator: React.FC<MainNavigatorStack> = () => {
  let ref = React.useRef(null);
  return (
    <>
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
        <Stack.Navigator initialRouteName={'BottomTabStack'}>
          <Stack.Screen
            name="BottomTabStack"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="QrScanner"
            component={QrScanner}
            options={{
              headerShown: false,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;

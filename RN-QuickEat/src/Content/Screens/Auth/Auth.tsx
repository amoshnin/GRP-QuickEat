// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// COMPONENTS IMPORTS //
import MainScreen from './Screens/MainScreen/MainScreen';
import SignInCompanyScreen from './Screens/SignInCompanyScreen/SignInCompanyScreen';
import SignInClientMainScreen from './Screens/SignInClientScreens/SignInClientMainScreen/SignInClientMainScreen';
import ClientEmailAuthScreen from './Screens/SignInClientScreens/ClientEmailAuthScreen/ClientEmailAuthScreen';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      {/* Init screens */}
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInCompanyScreen"
        component={SignInCompanyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInClientMainScreen"
        component={SignInClientMainScreen}
      />
      <Stack.Screen
        name="ClientEmailAuthScreen"
        component={ClientEmailAuthScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default memo(Auth, memoComparison);

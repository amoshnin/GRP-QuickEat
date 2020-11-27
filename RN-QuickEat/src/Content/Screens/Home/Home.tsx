// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';

// COMPONENTS IMPORTS //
import MainScreen from './Screens/MainScreen/MainScreen';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import {HeaderStyles} from '~/Content/Shared/Helpers/Constants/Styles';

/////////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

const Home = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default memo(Home, memoComparison);

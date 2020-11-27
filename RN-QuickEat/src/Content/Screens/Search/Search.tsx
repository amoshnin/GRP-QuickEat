// PLUGINS IMPORTS //
import React, {FC, memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// COMPONENTS IMPORTS //
import MainScreen from './Screens/MainScreen/MainScreen';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

interface PropsType {
  route: {params: {screen: any}};
}
const Search: FC<PropsType> = (props) => {
  const {screen} = props.route.params;

  return (
    <Stack.Navigator initialRouteName={screen || 'MainScreen'}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default memo(Search, memoComparison);

// PLUGINS IMPORTS //
import React, {FC, memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';

// COMPONENTS IMPORTS //
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen';
import RatingsScreen from './Screens/RatingsScreen/RatingsScreen';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import {HeaderStyles} from '~/Content/Shared/Helpers/Constants/Styles';
import Feather from 'react-native-vector-icons/Feather';

/////////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

interface PropsType {
  route: {params: {screen: string; params: any}};
}
const Profile: FC<PropsType> = (props) => {
  const {params} = props.route;
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Stack.Navigator initialRouteName={params.screen || 'ProfileScreen'}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <Feather
              name={'settings'}
              size={24}
              color={theme.colors.text}
              onPress={() => navigation.navigate('SettingsScreen')}
              style={HeaderStyles.icon}
            />
          ),
        }}
        initialParams={{
          ...params,
        }}
      />

      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Settings',
        }}
      />

      <Stack.Screen
        name="RatingsScreen"
        component={RatingsScreen}
        options={{
          headerTitle: 'Ratings and reviews',
        }}
      />
    </Stack.Navigator>
  );
};

export default memo(Profile, memoComparison);

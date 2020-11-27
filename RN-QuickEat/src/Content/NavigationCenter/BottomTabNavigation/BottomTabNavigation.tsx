// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useSafeArea} from 'react-native-safe-area-context';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import color from 'color';

// COMPONENTS IMPORTS //
import Home from '~/Content/Screens/Home/Home';
import Search from '~/Content/Screens/Search/Search';
import Profile from '~/Content/Screens/Profile/Profile';

// EXTRA IMPORTS

// REDUX
import {getIsClientSelector} from '~/Redux/Selectors/AuthSelectors';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  route: any;
}

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator: FC<PropsType> = (props) => {
  const isClient = useSelector(getIsClientSelector);
  const theme = useTheme();
  const safeArea = useSafeArea();
  const isFocused = useIsFocused();
  let icon = 'feather';
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Home';

  switch (routeName) {
    case 'Profile':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }

  const tabBarColor = theme.colors.surface;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
        sceneAnimationEnabled={true}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
          initialParams={{screen: undefined}}
        />
        {isClient && (
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: 'message-text-outline',
              tabBarColor,
            }}
            initialParams={{screen: undefined}}
          />
        )}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: isClient
              ? 'account-circle'
              : 'account-supervisor-circle',
            tabBarColor,
          }}
          initialParams={{screen: undefined}}
        />
      </Tab.Navigator>
      {/* <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={[styles.icon, {bottom: safeArea.bottom + 65}]}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {}}
        />
      </Portal> */}
    </>
  );
};

export default memo(BottomTabNavigator);

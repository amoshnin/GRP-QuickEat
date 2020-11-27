// PLUGINS IMPORTS //
import React, {useEffect, memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import NetInfo from '@react-native-community/netinfo';
import {auth} from '~/API/FirebaseConfig';

// SCREENS IMPORTS //
import BottomTabNavigation from './Content/NavigationCenter/BottomTabNavigation/BottomTabNavigation';
import OfflineScreen from './Content/Shared/Screens/OfflineScreen/OfflineScreen';

import Auth from './Content/Screens/Auth/Auth';

// EXTRA IMPORTS

// REDUX
import {
  setIsAuthThunkCreator,
  ActionCreatorsList as AuthGetActionCreatorsList,
} from '~/Redux/Reducers/AuthReducers/AuthGetReducer';
import {
  getAuthStatusSelector,
  getOnlineStatusSelector,
} from './Redux/Selectors/AuthSelectors';
import {memoComparison} from './Content/Shared/Helpers/Functions/GeneralFunctions';

/////////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const isOnline = useSelector(getOnlineStatusSelector);
  const isAuth = useSelector(getAuthStatusSelector);

  useEffect(() => {
    const subscriber = NetInfo.addEventListener((state) => {
      dispatch(
        AuthGetActionCreatorsList.setIsOnlineActionCreator(state.isConnected),
      );
    });
    return subscriber;
  }, []);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setIsAuthThunkCreator(true, user.uid));
      } else {
        dispatch(setIsAuthThunkCreator(false));
      }
    });
    return subscriber;
  }, []);

  return (
    <Stack.Navigator initialRouteName="BottomTabNavigation" headerMode="screen">
      {isOnline ? (
        isAuth ? (
          <>
            <Stack.Screen
              name="BottomTabNavigation"
              component={BottomTabNavigation}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
        )
      ) : (
        <Stack.Screen
          name="OfflineScreen"
          component={OfflineScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default memo(App, memoComparison);

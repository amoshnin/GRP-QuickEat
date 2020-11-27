// PLUGINS IMPORTS //
import React, {useMemo, useState, memo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppearanceProvider} from 'react-native-appearance';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

import {useColorScheme} from 'react-native-appearance';
import {Context} from './src/Content/NavigationCenter/Helpers/Context';
import {Theme} from '~/Content/Shared/Helpers/Constants/Styles';

// FIREBASE SETTINGS //
import {createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

// REDUX IMPORTS //
import ReduxStore from '~/Redux/ReduxStore';
import {Provider} from 'react-redux';
import Firebase from '~/API/FirebaseConfig';
import '~/API/FirebaseConfig';

// COMPONENTS IMPORTS //
import App from './src/App';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

enableScreens();
const AppWrapper = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light',
  );

  const preferences = useMemo(
    () => ({
      toggleTheme: () =>
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light')),
      theme,
    }),
    [theme],
  );

  const FirebaseProps = {
    firebase: Firebase,
    config: {
      userProfile: 'users',
      useFirestoreForProfile: true,
    },
    dispatch: ReduxStore.dispatch,
    createFirestoreInstance,
  };

  const PaperTheme = theme === 'light' ? Theme.Light : Theme.Dark;
  return (
    <Provider store={ReduxStore}>
      <ReactReduxFirebaseProvider {...FirebaseProps}>
        <SafeAreaProvider>
          <AppearanceProvider>
            <Context.Provider value={preferences}>
              <PaperProvider theme={PaperTheme}>
                <NavigationContainer theme={PaperTheme as any}>
                  <App />
                </NavigationContainer>
              </PaperProvider>
            </Context.Provider>
          </AppearanceProvider>
        </SafeAreaProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default memo(AppWrapper, memoComparison);

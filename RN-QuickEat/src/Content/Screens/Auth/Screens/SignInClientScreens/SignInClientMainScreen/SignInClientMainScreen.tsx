// PLUGINS IMPORTS //
import React, {memo, useEffect} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';
import {GoogleSignin} from '@react-native-community/google-signin';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {WEB_CLIENT_ID} from '~/Content/Shared/Helpers/Constants/Constants';
import {googleAuthFunction} from '~/Redux/Reducers/AuthReducers/AuthFunctions';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';
import {useDispatch} from 'react-redux';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const SignInClientMainScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId: WEB_CLIENT_ID,
    });
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => googleAuthFunction(dispatch)}>
        <Image
          source={require('~/Assets/Images/icons/google.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ClientEmailAuthScreen')}>
        <Text>Sign in with email & password</Text>
      </TouchableOpacity>
    </View>
  );
};

const ICON_SIZE = 20;
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,
  },

  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
});

export default memo(SignInClientMainScreen, memoComparison);

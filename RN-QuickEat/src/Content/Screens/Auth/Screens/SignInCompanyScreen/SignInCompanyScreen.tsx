// PLUGINS IMPORTS //
import React, {memo, FC, useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from 'react-native-paper';
import {auth} from '~/API/FirebaseConfig';
import * as yup from 'yup';

// COMPONENTS IMPORTS //
import Slider, {SlideType} from '~/Content/Shared/Components/Wrappers/Slider';

import {
  renderTime,
  memoComparison,
} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Theme} from '~/Content/Shared/Helpers/Constants/Styles';

// REDUX
import {getOnlineStatusSelector} from '~/Redux/Selectors/AuthSelectors';
import {registerThunkCreator} from '~/Redux/Reducers/AuthReducers/AuthSetReducer';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const SignInCompanyScreen: FC<PropsType> = (props) => {
  const [verifyFn, setVerifyFn] = useState<any>();

  const {colors} = useTheme();
  const isOnline = useSelector(getOnlineStatusSelector);
  const dispatch = useDispatch();

  const [time, setTime] = useState(180);
  useEffect(() => {
    setTimeout(() => {
      setTime((time) => time - 1);
    }, 1000);
  }, [time]);

  const data: Array<SlideType> = [
    {
      title: 'Enter your phone number?',
      subtitle: 'To verify',
      value: 'phone',
      inputType: 'PHONE',
      validation: yup
        .number()
        .required('Validation.PasswordRequired')
        .typeError('Validation.PasswordRequired'),
      onChangeSlide: (value) =>
        auth
          .signInWithPhoneNumber(value)
          .then((resultFunction) => setVerifyFn(resultFunction))
          .catch((error) => console.log(error)),
    },
    {
      title: 'Enter your phone number?',
      subtitle: 'To verify',
      value: 'code',
      inputType: 'SMS_CODE',
      validation: yup
        .number()
        .required('Validation.PasswordRequired')
        .typeError('Validation.PasswordRequired'),
      button: {
        text: `Re-send the code to SMS in ${renderTime(time)}`,
        onPress: () => {},
      },
    },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <Slider
        data={data}
        initialValues={{phone: '', code: ''}}
        wrapperStyle={styles.container}
        errorText={
          isOnline
            ? 'Wrong email or password combination entered. Please try again.'
            : 'Please check your network connection'
        }
        submitFunction={async (values: any) => {
          verifyFn.confirm(values.code).then((res: {user: {_user: any}}) =>
            dispatch(
              registerThunkCreator(res.user._user.uid, {
                phoneNum: values.phone,
              }),
            ),
          );
        }}
        buttonStyle={{
          backgroundColor: colors.notification,
        }}
        buttonIcon={<AntDesign name={'arrowright'} color={'white'} size={24} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: Theme.Dark.colors.background},

  container: {backgroundColor: Theme.Dark.colors.background},
});

export default memo(SignInCompanyScreen, memoComparison);

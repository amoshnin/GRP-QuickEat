// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from 'react-native-paper';
import * as yup from 'yup';

// COMPONENTS IMPORTS //
import Slider, {SlideType} from '~/Content/Shared/Components/Wrappers/Slider';
import {emailAuthFunction} from '~/Redux/Reducers/AuthReducers/AuthFunctions';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Theme} from '~/Content/Shared/Helpers/Constants/Styles';

// REDUX
import {getOnlineStatusSelector} from '~/Redux/Selectors/AuthSelectors';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const {width} = Dimensions.get('screen');
const EmailAuthScreen: FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const isOnline = useSelector(getOnlineStatusSelector);

  const data: Array<SlideType> = [
    {
      title: 'Enter your email number?',
      subtitle: 'To verify',
      value: 'email',
      inputType: 'DEFAULT',
      validation: yup.string(),
    },
    {
      title: 'Enter your email number?',
      subtitle: 'To verify',
      value: 'password',
      inputType: 'DEFAULT',
      validation: yup
        .string()
        .required('Validation.PasswordRequired')
        .typeError('Validation.PasswordRequired'),
    },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <Slider
        width={width}
        data={data}
        initialValues={{email: '', password: ''}}
        wrapperStyle={styles.container}
        errorText={
          isOnline
            ? 'Wrong email or password combination entered. Please try again.'
            : 'Please check your network connection'
        }
        submitFunction={async (values) =>
          emailAuthFunction(dispatch, values.email, values.password)
        }
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

export default memo(EmailAuthScreen, memoComparison);

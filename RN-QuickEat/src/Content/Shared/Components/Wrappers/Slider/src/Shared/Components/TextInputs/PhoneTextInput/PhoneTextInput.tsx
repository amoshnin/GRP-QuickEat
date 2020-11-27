// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {FormikProps} from 'formik';
import PhoneInput from 'react-native-phone-number-input';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  value: string;

  FormikProps: FormikProps<any>;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const PhoneTextInput: React.FC<PropsType> = (props) => {
  return (
    <>
      <PhoneInput
        defaultCode={'BG'}
        onChangeFormattedText={props.FormikProps.handleChange(props.value)}
        withDarkTheme
        withShadow
        autoFocus
        containerStyle={[styles.wrapper, props.style]}
        textContainerStyle={[styles.wrapper, props.style]}
        textInputStyle={[props.textStyle, styles.text]}
        codeTextStyle={[props.textStyle, styles.text]}
        disableArrowIcon={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#191919',
  },

  text: {color: 'white'},
});

export default memo(PhoneTextInput);

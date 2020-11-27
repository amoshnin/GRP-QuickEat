// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {TextInput, StyleSheet, ViewStyle} from 'react-native';
import {FormikProps} from 'formik';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  value: string;
  FormikProps: FormikProps<any>;

  style?: ViewStyle;
};

const DefaultTextInput: React.FC<PropsType> = (props) => {
  return (
    <TextInput
      autoFocus
      onChangeText={props.FormikProps.handleChange(props.value)}
      onBlur={() => props.FormikProps.handleBlur(props.value)}
      value={props.FormikProps.values[props.value]}
      style={[styles.wrapper, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    color: 'white',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 15,
  },
});

export default memo(DefaultTextInput);

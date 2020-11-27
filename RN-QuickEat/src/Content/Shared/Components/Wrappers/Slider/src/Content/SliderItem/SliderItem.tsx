// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Text} from '../../Shared/Components';
import {FormikProps} from 'formik';

// COMPONENTS IMPORTS //
import {
  DefaultTextInput,
  PhoneTextInput,
  CodeTextInput,
} from '../../Shared/Components';

// EXTRA IMPORTS //
import {TextStyleType} from '../../Shared/Types/Types';

// TYPES
import {SlideType} from '../../../index';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  FormikProps: FormikProps<any>;
  item: SlideType;

  textStyle?: TextStyleType;
  textInputStyle?: ViewStyle;

  errorText?: string;
  errorVisible: boolean;
};

const SliderItem: React.FC<PropsType> = (props) => {
  const {value, inputType = 'DEFAULT', button} = props.item;

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text size={20} style={props.textStyle?.text}>
          {props.item.title}
        </Text>
        <Text size={14} style={props.textStyle?.text}>
          {props.item.subtitle}
        </Text>
      </View>

      {props.FormikProps.touched[value] && props.FormikProps.errors[value] && (
        <Text color={'crimson'} style={props.textStyle?.errorText}>
          {props.FormikProps.touched[value] && props.FormikProps.errors[value]}
        </Text>
      )}

      {props.errorVisible && props.errorText && (
        <Text color={'crimson'} style={props.textStyle?.errorText}>
          {props.errorText}
        </Text>
      )}

      {inputType === 'PHONE' ? (
        <PhoneTextInput
          value={value}
          FormikProps={props.FormikProps}
          style={props.textInputStyle}
        />
      ) : inputType === 'SMS_CODE' ? (
        <CodeTextInput
          length={6}
          value={value}
          FormikProps={props.FormikProps}
          onChangeCode={(value) => console.log(value)}
        />
      ) : (
        <DefaultTextInput
          value={value}
          FormikProps={props.FormikProps}
          style={props.textInputStyle}
        />
      )}

      {button && (
        <Text style={styles.button} onPress={button.onPress}>
          {button?.text}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },

  content: {
    marginBottom: 20,
  },

  input: {
    color: 'white',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 15,
  },

  button: {
    marginTop: 35,
  },
});

export default memo(SliderItem);

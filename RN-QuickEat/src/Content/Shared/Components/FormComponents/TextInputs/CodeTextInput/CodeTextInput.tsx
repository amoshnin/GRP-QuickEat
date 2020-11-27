// PLUGINS IMPORTS //
import React, {FC, useState, useRef, memo} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {FormikProps} from 'formik';

// COMPONENTS IMPORTS //
import BoxItem from './BoxItem/BoxItem';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  wrapperStyle?: ViewStyle;
  boxStyle?: ViewStyle;
  boxTextStyle?: TextStyle;

  passcode?: boolean;
  passcodeChar?: string;
  autoFocus?: boolean;

  length: number;
  onChangeCode?: (code: string) => void | Promise<void>;

  value: string;
  FormikProps: FormikProps<any>;
}

const CodeInputCode: FC<PropsType> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const textInputCode = useRef(null) as any;

  const onChangeText = (string: string) => {
    string = string.replace(/[^0-9]/g, '');
    const changed = string !== value;
    setValue(string);

    if (changed) {
      props.onChangeCode && props.onChangeCode(string);
      props.FormikProps.handleChange(props.value)(string);
    }
    string.length === props.length && Keyboard.dismiss();
  };

  return (
    <>
      <View style={props.wrapperStyle}>
        <TouchableOpacity
          onPress={() => textInputCode && textInputCode.current.focus()}
          style={styles.wrapper}
          activeOpacity={1}>
          {Array(props.length)
            .fill(0)
            .map((item, index) => (
              <BoxItem
                key={index}
                index={index}
                value={value as string}
                boxStyle={props.boxStyle}
                boxTextStyle={props.boxTextStyle}
                isFocused={textInputCode && focused}
              />
            ))}
        </TouchableOpacity>
      </View>
      <TextInput
        ref={textInputCode}
        autoFocus={props.autoFocus}
        keyboardType="number-pad"
        caretHidden={true}
        onChangeText={onChangeText}
        maxLength={props.length}
        style={styles.textInput}
        value={value as string}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'stretch',
    flexDirection: 'row',
  },

  textInput: {fontSize: 0, height: 1, opacity: 0, margin: 0, padding: 0},
});

export default memo(CodeInputCode);

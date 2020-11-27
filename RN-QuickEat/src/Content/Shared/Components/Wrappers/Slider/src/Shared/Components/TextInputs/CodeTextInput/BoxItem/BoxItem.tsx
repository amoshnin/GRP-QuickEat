// PLUGINS IMPORTS //
import React, {FC, memo} from 'react';
import {Text, View, ViewStyle, TextStyle, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  boxStyle?: ViewStyle;
  boxTextStyle?: TextStyle;

  passcode?: boolean;
  passcodeChar?: string;

  isFocused: boolean;
  value: string;
  index: number;
}

const BoxItem: FC<PropsType> = (props) => {
  const extractCode = (index: number) => {
    if (props.passcode && props.value.length - 1 > index) {
      return props.passcodeChar || '*';
    }
    return props.value.length <= index ? '' : props.value.substr(index, 1);
  };

  const isFocused = props.index === props.value.length - 1;
  return (
    <View
      style={[
        styles.wrapper,
        props.boxStyle,
        props.isFocused && isFocused && styles.focused_wrap,
      ]}
      key={'input-code-' + props.index.toString()}>
      <Text style={[styles.text, props.boxTextStyle]}>
        {extractCode(props.index)}
      </Text>
    </View>
  );
};

const SIZE = 50;
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZE,
    height: SIZE,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    marginRight: 10,
  },

  focused_wrap: {
    borderBottomColor: '#19A1F1',
  },

  text: {fontSize: 30, color: 'white'},
});

export default memo(BoxItem);

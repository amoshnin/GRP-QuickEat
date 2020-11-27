// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  borderColor?: string;
  backgroundColor?: string;
  isCenterAlign?: boolean;

  textSize?: number;
  textColor?: string;

  style?: any;
  text?: string;
  icon?: any;
  onPress?: () => void;
};

const Button: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        props.style,
        {
          backgroundColor: props.backgroundColor,
          alignSelf: props.isCenterAlign && ('center' as any),
        },
      ]}
      onPress={() => props.onPress && props.onPress()}>
      {props.icon && props.icon}
    </TouchableOpacity>
  );
};

const BUTTON_SIZE = 50;
const styles = StyleSheet.create({
  wrapper: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default memo(Button);

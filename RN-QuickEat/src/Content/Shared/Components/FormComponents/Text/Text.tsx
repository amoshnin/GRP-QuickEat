// PLUGINS IMPORTS //
import React from 'react';
import {Text, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  color?: string;
  size?: number;
  isBold?: boolean;
  isCenterAlign?: boolean;
  fontFamily?: string;
  opacity?: number;

  style?: TextStyle;
  wrapperStyle?: ViewStyle;
  onPress?: () => void;
};

const TextBody: React.FC<PropsType> = (props) => {
  const {colors} = useTheme();

  return (
    <Text
      style={[
        {
          color: props.color || colors.text,
          fontSize: props.size || 15,
          fontWeight: props.isBold ? 'bold' : '500',
          textAlign: props.isCenterAlign && 'center',
          opacity: props.opacity,
        } as any,
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

const TextComponent: React.FC<PropsType> = (props) => {
  if (props.onPress) {
    return (
      <TouchableOpacity style={props.wrapperStyle} onPress={props.onPress}>
        <TextBody {...props}>{props.children}</TextBody>
      </TouchableOpacity>
    );
  } else {
    return <TextBody {...props}>{props.children}</TextBody>;
  }
};

export default TextComponent;

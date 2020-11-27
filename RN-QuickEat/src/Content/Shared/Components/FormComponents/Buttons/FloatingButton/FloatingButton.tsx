// PLUGINS IMPORTS //
import React, {memo, FC, ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from 'react-native-paper';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  icon: ReactNode;
  onPress?: () => void;

  style?: ViewStyle;
  backgroundColor?: string;
}

const FloatingButton: FC<PropsType> = (props) => {
  const theme = useTheme() as any;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.wrapper,
        theme.shadows.medium,
        {backgroundColor: props.backgroundColor || 'white'},
        props.style,
      ]}>
      {props.icon}
    </TouchableOpacity>
  );
};

const SIZE = 46;
const styles = StyleSheet.create({
  wrapper: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(FloatingButton);

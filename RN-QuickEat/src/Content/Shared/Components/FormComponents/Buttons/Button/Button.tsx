// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';
import {useTheme} from 'react-native-paper';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  text?: string;
  icon?: any;
  children?: any;

  backgroundColor?: string;
  textColor?: string;
  isBoldText?: boolean;
  disabled?: boolean;
  height?: number;
  style?: any;

  onPress?: () => void;
};

const Button: React.FC<PropsType> = (props) => {
  const {colors, roundness} = useTheme();
  const opacity = props.disabled === true ? 0.5 : 1;

  return (
    <TouchableOpacity
      style={[styles.wrapper, props.style]}
      disabled={props.disabled}
      onPress={props.onPress}>
      <View
        style={[
          {
            borderRadius: roundness,
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : colors.primary,
            height: props.height || undefined,
          },
          styles.wrapper,
          props.style,
          {opacity},
        ]}>
        {props.icon && (
          <View style={[styles.icon, {left: props.text && 15}]}>
            {props.icon}
          </View>
        )}
        {props.text ? (
          <Text
            style={{
              color: props.textColor || 'white',
            }}
            isBold={props.isBoldText}>
            {props.text}
          </Text>
        ) : (
          props.children
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 7,
  },

  icon: {
    position: 'absolute',
  },
});

export default memo(Button, memoComparison);

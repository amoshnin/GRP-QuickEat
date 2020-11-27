// PLUGINS IMPORTS //
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {interpolateNode} from 'react-native-reanimated';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Feather from 'react-native-vector-icons/Feather';
import {Text} from '../../../FormComponents';

/////////////////////////////////////////////////////////////////////////////

const {sub, Extrapolate} = Animated;
const {width} = Dimensions.get('window');
const size = 50;
interface PropsType {
  progress: Animated.Node<number>;
  y: Animated.Node<number>;
  color?: string;
}

const Button = (props: PropsType) => {
  const translateX = interpolateNode(props.progress, {
    inputRange: [0, 0.4],
    outputRange: [width - size - 8, 0],
  });
  const translateY = sub(props.y, size / 2);
  const opacity = interpolateNode(props.progress, {
    inputRange: [0, 0.1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {transform: [{translateX}, {translateY}], opacity},
      ]}>
      <Text style={styles.text} color={'white'}>
        Swipe
      </Text>
      <Feather name="chevron-left" color={props.color || 'black'} size={40} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: size,
    height: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {left: -58, top: 15, position: 'absolute'},
});

export default Button;

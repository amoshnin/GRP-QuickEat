// PLUGINS IMPORTS //
import React, {memo, ReactNode, FC} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Animated, {
  Value,
  cond,
  multiply,
  divide,
  interpolateNode,
} from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
// @ts-ignore
import {onGestureEvent, snapPoint} from 'react-native-redash/lib/module/v1';

import {followPointer, snapProgress} from './Helpers/AnimationHelpers';
import {
  initialSideWidth,
  initialWaveCenter,
  sideWidth,
  waveHorRadius,
  waveHorRadiusBack,
  waveVertRadius,
} from './Helpers/WaveHelpers';

// COMPONENTS IMPORTS //
import Wave from './Wave/Wave';
import BodyWrap from './BodyWrap/BodyWrap';
import Button from './Helpers/Button';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  initContent: {
    backgroundColor: string;
    children: ReactNode;
  };
  shallowContent: {
    backgroundColor: string;
    children: ReactNode;
  };
  buttonColor?: string;
}

const {width} = Dimensions.get('window');
const MainScreen: FC<PropsType> = (props) => {
  const y = new Value(initialWaveCenter);
  const translationX = new Value(0);
  const velocityX = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const gestureHandler = onGestureEvent({
    translationX,
    velocityX,
    y,
    state,
  });
  const maxDist = width - initialSideWidth;
  const isBack = new Value(0);
  const gestureProgress = cond(
    isBack,
    interpolateNode(translationX, {
      inputRange: [0, maxDist],
      outputRange: [1, 0],
    }),
    interpolateNode(translationX, {
      inputRange: [-maxDist, 0],
      outputRange: [0.4, 0],
    }),
  );
  const progress = snapProgress(
    gestureProgress,
    state,
    isBack,
    snapPoint(
      gestureProgress,
      divide(
        multiply(-1, velocityX),
        cond(isBack, maxDist, multiply(maxDist, 0.4)),
      ),
      [0, 1],
    ),
  );
  const centerY = followPointer(y);
  const horRadius = cond(
    isBack,
    waveHorRadiusBack(progress),
    waveHorRadius(progress),
  );
  const vertRadius = waveVertRadius(progress);
  const sWidth = sideWidth(progress);
  return (
    <View style={styles.container}>
      <BodyWrap backgroundColor={props.shallowContent.backgroundColor}>
        {props.shallowContent.children}
      </BodyWrap>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Wave
            sideWidth={sWidth}
            centerY={centerY}
            horRadius={horRadius}
            vertRadius={vertRadius}>
            <BodyWrap backgroundColor={props.initContent.backgroundColor}>
              {props.initContent.children}
            </BodyWrap>
          </Wave>
          <Button y={centerY} progress={progress} color={props.buttonColor} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(MainScreen, memoComparison);

// PLUGINS IMPORTS //
import React, {memo, ReactNode, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  backgroundColor: string;
  children: ReactNode;
}

const BodyWrap: FC<PropsType> = (props) => {
  return (
    <View style={[styles.wrapper, {backgroundColor: props.backgroundColor}]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 999,
  },
});

export default memo(BodyWrap, memoComparison);

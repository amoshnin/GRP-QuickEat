// PLUGINS IMPORTS //
import React, {FC, memo} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}
const MainScreen: FC<PropsType> = (props) => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView style={StyleSheet.absoluteFillObject}>
        <View style={{position: 'absolute', top: 100, left: 50}} />
      </MapView>
    </View>
  );
};

export default memo(MainScreen, memoComparison);

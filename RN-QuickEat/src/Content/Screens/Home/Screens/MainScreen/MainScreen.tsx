// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {View} from 'react-native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const MainScreen = (props: PropsType) => {
  return <View></View>;
};

export default memo(MainScreen, memoComparison);

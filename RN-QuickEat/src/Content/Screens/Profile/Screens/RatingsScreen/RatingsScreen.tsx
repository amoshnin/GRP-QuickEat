// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

// COMPONENTS IMPORTS //
import RatingItem, {
  RatingType,
} from '~/Content/Screens/Profile/Shared/RatingItem/RatingItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const RatingsScreen: FC<PropsType> = (props) => {
  const data: Array<RatingType> = [];
  return (
    <ScrollView>
      {data.map((item) => (
        <RatingItem rating={item} />
      ))}
    </ScrollView>
  );
};

export default memo(RatingsScreen, memoComparison);

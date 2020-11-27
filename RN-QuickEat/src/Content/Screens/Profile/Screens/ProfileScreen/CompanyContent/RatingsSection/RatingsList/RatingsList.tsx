// PLUGINS IMPORTS //
import React, {FC, memo} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// COMPONENTS IMPORTS //
import RatingItem, {
  RatingType,
  width,
} from '~/Content/Screens/Profile/Shared/RatingItem/RatingItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const RatingsList: FC<PropsType> = (props) => {
  const data: Array<RatingType> = [
    {
      userName: '',
      date: '14 april',
      rating: 4,
      title: 'Bug in list',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni",
      ID: '1',
    },
  ];
  return (
    <ScrollView
      style={styles.wrapper}
      horizontal
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      decelerationRate={0}
      snapToInterval={width * 1.06}>
      {[...data, ...data, ...data, ...data].map((item, index) => (
        <RatingItem key={`${item.ID}${index}`} rating={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'visible',
  },
});

export default memo(RatingsList, memoComparison);

// PLUGINS IMPORTS //
import React, {FC, memo} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Text} from '~/Content/Shared/Components/FormComponents';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

export interface RatingType {
  userName: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  //
  title: string;
  text: string;
  ID: string;
}
interface PropsType {
  rating: RatingType;
}

const {width: screenWidth} = Dimensions.get('screen');
export const width = screenWidth * 0.9;
const RatingItem: FC<PropsType> = (props) => {
  const {userName, date, rating, title, text} = props.rating;
  const theme = useTheme() as any;

  return (
    <View
      style={[
        styles.wrapper,
        {backgroundColor: theme.colors.card, ...theme.shadows.medium},
      ]}>
      <Text>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginTop: 15,
  },
});

export default memo(RatingItem);

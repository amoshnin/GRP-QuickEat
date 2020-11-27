// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';
import RatingsSection from './RatingsSection/RatingsSection';

import SectionItem from '../Shared/SectionItem/SectionItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

const CompanyContent = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <View style={styles.content}>
        <SubHeader />

        <SectionItem
          title={'Ratings and reviews'}
          headerButton={{
            text: 'See more',
            onPress: () => navigation.navigate('RatingsScreen'),
          }}>
          <RatingsSection />
        </SectionItem>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

export default memo(CompanyContent, memoComparison);

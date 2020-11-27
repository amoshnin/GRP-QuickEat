// PLUGINS IMPORTS //
import React, {memo} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';

// COMPONENTS IMPORTS //
import LiquidSlider from '~/Content/Shared/Components/Wrappers/LiquidSlider';
import ShallowContent from './ShallowContent/ShallowContent';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import {Theme} from '~/Content/Shared/Helpers/Constants/Styles';

/////////////////////////////////////////////////////////////////////////////

const MainScreen = () => {
  return (
    <LiquidSlider
      buttonColor={'white'}
      initContent={{
        backgroundColor: '#4E37E2',
        children: (
          <>
            <Image
              source={require('~/Assets/Images/illustrations/auth1.png')}
            />
            <View style={styles.content}>
              <Text color={'white'} size={42} style={styles.title}>
                Welcome to Easy Service!
              </Text>

              <Text size={16} color={'silver'}>
                The leading app in search of Service!
              </Text>
            </View>
          </>
        ),
      }}
      shallowContent={{
        backgroundColor: Theme.Dark.colors.background,
        children: <ShallowContent />,
      }}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    textAlign: 'left',

    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    width: '90%',
  },

  title: {
    marginBottom: 7,
  },
});

export default memo(MainScreen, memoComparison);

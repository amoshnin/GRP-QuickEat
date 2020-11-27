// PLUGINS IMPORTS //
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const Header: FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text size={44} isBold>
          4,7
        </Text>
        <Text color={'#8C8C8C'} size={14}>
          out of 5
        </Text>
      </View>
      <View>
        <Text color={'#8C8C8C'}>18 985 ratings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  content: {
    alignItems: 'center',
  },
});

export default Header;

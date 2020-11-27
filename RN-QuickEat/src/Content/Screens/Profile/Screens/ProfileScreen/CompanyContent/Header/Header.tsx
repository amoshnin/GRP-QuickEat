// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';
import {useTheme} from 'react-native-paper';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import Ionicons from 'react-native-vector-icons/Ionicons';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const Header: FC<PropsType> = (props) => {
  const theme = useTheme() as any;

  return (
    <TouchableOpacity
      style={[styles.wrapper, {backgroundColor: theme.colors.card}]}>
      <Ionicons name={'image'} size={40} color={'gray'} style={styles.icon} />
      <Text size={20} isBold style={styles.title}>
        The company
      </Text>
    </TouchableOpacity>
  );
};

const BLOCK_HEIGHT = 155;
const BORDER_RADIUS = 30;
const styles = StyleSheet.create({
  wrapper: {
    height: BLOCK_HEIGHT,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {position: 'absolute', bottom: 19, left: 30},

  icon: {
    marginBottom: 11,
  },
});

export default memo(Header, memoComparison);

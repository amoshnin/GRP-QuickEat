// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import AntDesign from 'react-native-vector-icons/AntDesign';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  index: number;
  totalLength: number;

  onBackClicked: () => void;
}

const Header: FC<PropsType> = (props) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => props.onBackClicked()}
        style={styles.icon}>
        <AntDesign name={'arrowleft'} color={'white'} size={24} />
      </TouchableOpacity>
    </>
  );
};

const MARGIN = 20;
const styles = StyleSheet.create({
  icon: {
    marginTop: MARGIN - 10,
    marginLeft: MARGIN,
    marginBottom: MARGIN - 15,
  },
});

export default memo(Header, memoComparison);

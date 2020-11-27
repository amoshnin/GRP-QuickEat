// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {
  View,
  Image as RNImage,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import AntDesign from 'react-native-vector-icons/AntDesign';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  uri: string;
  size?: number;

  onRemove?: () => void;
}

const Image: FC<PropsType> = ({uri, size = 100, onRemove}) => {
  return (
    <View style={styles.wrapper}>
      {onRemove && (
        <TouchableOpacity style={styles.icon} onPress={onRemove}>
          <AntDesign name={'close'} color={'black'} size={18} />
        </TouchableOpacity>
      )}
      <RNImage
        source={{uri}}
        style={[styles.image, {height: size + 10, width: size}]}
      />
    </View>
  );
};

const MARGIN = 8;
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 5,
  },

  image: {
    borderRadius: 4,
  },

  icon: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 111,
    borderRadius: 99,
    right: -MARGIN,
    top: -MARGIN,
    padding: 4,
  },
});

export default memo(Image, memoComparison);

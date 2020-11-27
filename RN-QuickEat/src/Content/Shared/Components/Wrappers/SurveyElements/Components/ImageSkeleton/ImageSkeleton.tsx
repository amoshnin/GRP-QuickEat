// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import Ionicons from 'react-native-vector-icons/Ionicons';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  size?: number;
  returnFunction: (images: Array<string>) => void;
}

const ImageSkelet: FC<PropsType> = ({returnFunction, size = 100}) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, {height: size + 10, width: size}]}
      onPress={() =>
        ImagePicker.openPicker({
          multiple: true,
        }).then((images) => {
          returnFunction(images.map((item) => item.sourceURL as string));
        })
      }>
      <Ionicons name={'images'} size={26} color={'gray'} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    marginRight: 5,
  },

  icon: {
    opacity: 0.7,
  },
});

export default memo(ImageSkelet, memoComparison);

// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageRequireSource,
} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';
import {useTheme} from 'react-native-paper';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export type UserType = 'Client' | 'Company';
export type FieldType = {
  title: UserType;
  image: ImageRequireSource;
  onPress?: () => void;
};
interface PropsType {
  field: FieldType;
  isSelected: boolean;
}

const ButtonItem: FC<PropsType> = (props) => {
  const {title, image, onPress} = props.field;
  const theme = useTheme() as any;

  return (
    <TouchableOpacity
      style={[theme.shadows.medium, styles.wrapper]}
      onPress={onPress}>
      <View
        style={[
          styles.container,
          props.isSelected && {backgroundColor: 'black'},
        ]}>
        <Image source={image} style={styles.image} />
      </View>
      <Text color={'white'} isBold isCenterAlign>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const IMAGE_SIZE = 93;
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },

  container: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },

  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    resizeMode: 'center',
  },
});

export default memo(ButtonItem, memoComparison);

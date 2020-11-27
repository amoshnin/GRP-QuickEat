// PLUGINS IMPORTS //
import React, {memo, FC, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';
import {useTheme} from 'react-native-paper';

// COMPONENTS IMPORTS //
import {
  memoComparison,
  truncate,
} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const DESC_WORD_LIMIT = 13;
const SubHeader: FC<PropsType> = (props) => {
  const [textVisible, setTextVisible] = useState<boolean>(false);
  const theme = useTheme();
  const desc = `Lorem industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  return (
    <View style={styles.wrapper}>
      <Text>
        {textVisible ? desc : truncate(desc, DESC_WORD_LIMIT)}
        {desc.length > DESC_WORD_LIMIT && !textVisible && (
          <Text
            wrapperStyle={styles.text}
            color={theme.colors.primary}
            onPress={() => setTextVisible((visibility) => !visibility)}>
            {' '}
            Show more
          </Text>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
  },

  text: {marginBottom: -4},
});

export default memo(SubHeader, memoComparison);

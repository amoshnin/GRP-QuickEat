// PLUGINS IMPORTS //
import React, {FC, memo, ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';
import {useTheme} from 'react-native-paper';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  title: string;
  children: ReactNode;

  containerStyle?: ViewStyle;
  headerButton?: {text: string; onPress: () => void};
}

const SectionItem: FC<PropsType> = (props) => {
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <View style={styles.header_wrap}>
        <Text size={24} isBold>
          {props.title}
        </Text>
        {props.headerButton && (
          <Text
            size={16}
            color={theme.colors.primary}
            onPress={props.headerButton.onPress}>
            {props.headerButton?.text}
          </Text>
        )}
      </View>
      <View style={props.containerStyle}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
  },

  header_wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default memo(SectionItem, memoComparison);

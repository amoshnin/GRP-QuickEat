// PLUGINS IMPORTS //
import React, {memo, FC, ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  children: ReactNode;
  title: string;
}

const SectionItem: FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 25,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default memo(SectionItem, memoComparison);

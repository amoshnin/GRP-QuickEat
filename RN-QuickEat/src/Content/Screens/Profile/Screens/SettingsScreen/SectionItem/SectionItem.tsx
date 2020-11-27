// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';

// COMPONENTS IMPORTS //
import FieldItem, {FieldItemType} from './FieldItem/FieldItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

export interface SettingsSectionType {
  title: string;
  fields: Array<FieldItemType>;
}

const SectionItem: FC<SettingsSectionType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text color={'#899298'}>{props.title}</Text>
      {props.fields.map((field, index) => {
        const isLast = props.fields.length - 1 === index;
        return <FieldItem field={field} isLast={isLast} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {marginBottom: 20},
});

export default memo(SectionItem, memoComparison);

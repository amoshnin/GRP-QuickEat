// PLUGINS IMPORTS //
import React, {memo, FC, ReactNode} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Switch,
  TextStyle,
} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';
import {RectButton} from 'react-native-gesture-handler';

// EXTRA IMPORTS
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/////////////////////////////////////////////////////////////////////////////

export interface FieldItemType {
  title: string;
  icon: ReactNode;
  onPress: () => void;

  titleStyle?: TextStyle;
  toggle?: {
    value: boolean;
  };
}

interface PropsType {
  field: FieldItemType;
  isLast: boolean;
}

const FieldItem: FC<PropsType> = (props) => {
  if (props.field.toggle) {
    return (
      <View key={props.field.title}>
        <Body field={props.field} isLast={props.isLast} />
      </View>
    );
  } else {
    return (
      <RectButton key={props.field.title} onPress={() => props.field.onPress()}>
        <Body field={props.field} isLast={props.isLast} />
      </RectButton>
    );
  }
};

const Body: FC<PropsType> = (props) => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.title_wrap}>
          {props.field.icon}
          <Text style={[styles.title, props.field.titleStyle]}>
            {props.field.title}
          </Text>
        </View>

        {props.field.toggle ? (
          <TouchableOpacity onPress={props.field.onPress}>
            <View pointerEvents="none">
              <Switch value={props.field.toggle.value} />
            </View>
          </TouchableOpacity>
        ) : (
          <MaterialIcons
            name={'keyboard-arrow-right'}
            size={24}
            color={'#A7AEB1'}
          />
        )}
      </View>
      {!props.isLast && <View style={styles.divider} />}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },

  title_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    marginLeft: 15,
  },

  divider: {
    borderWidth: 1,
    borderColor: '#262628',
  },
});

export default memo(FieldItem, memoComparison);

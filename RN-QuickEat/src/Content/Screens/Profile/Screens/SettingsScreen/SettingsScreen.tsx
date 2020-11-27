// PLUGINS IMPORTS //
import React, {memo, FC, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from 'react-native-paper';
import {auth} from '~/API/FirebaseConfig';

// COMPONENTS IMPORTS //
import SectionItem, {SettingsSectionType} from './SectionItem/SectionItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import {Context} from '~/Content/NavigationCenter/Helpers/Context';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

// REDUX
import {getIsClientSelector} from '~/Redux/Selectors/AuthSelectors';
import {useNavigation} from '@react-navigation/native';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const SettingsScreen: FC<PropsType> = (props) => {
  const PaperTheme = useTheme();
  const {theme, toggleTheme} = useContext(Context);

  const data: Array<SettingsSectionType> = [
    {
      title: 'Appearence',
      fields: [
        {
          title: 'Dark theme',
          icon: (
            <Feather name={'sun'} size={24} color={PaperTheme.colors.text} />
          ),
          onPress: () => toggleTheme(),
          toggle: {value: theme === 'dark'},
        },
      ],
    },
    {
      title: 'Other',
      fields: [
        {
          title: 'Logout',
          icon: (
            <AntDesign
              name={'logout'}
              size={24}
              color={PaperTheme.colors.text}
            />
          ),
          onPress: () => auth.signOut(),
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.wrapper}>
      {data.map((item) => (
        <SectionItem key={item.title} title={item.title} fields={item.fields} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default memo(SettingsScreen, memoComparison);

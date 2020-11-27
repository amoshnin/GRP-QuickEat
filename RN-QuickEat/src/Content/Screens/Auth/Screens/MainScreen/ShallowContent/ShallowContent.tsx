// PLUGINS IMPORTS //
import React, {memo, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from '~/Content/Shared/Components/FormComponents';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import ButtonItem, {UserType, FieldType} from './ButtonItem/ButtonItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const ShallowContent = () => {
  const [selectedType, setSelectedType] = useState<UserType | null>(null);
  const navigation = useNavigation();

  const UsersTypes: Array<FieldType> = [
    {
      title: 'Client',
      image: require('~/Assets/Images/illustrations/client.png'),
    },
    {
      title: 'Company',
      image: require('~/Assets/Images/illustrations/company.png'),
    },
  ];

  return (
    <>
      <View style={styles.content}>
        <Text color={'white'} size={21} isBold>
          You are a client or service provider?
        </Text>
        <View style={styles.buttons_wrap}>
          {UsersTypes.map((field) => (
            <ButtonItem
              key={field.title}
              field={{...field, onPress: () => setSelectedType(field.title)}}
              isSelected={field.title === selectedType}
            />
          ))}
        </View>
      </View>
      <Button
        text={'Continue'}
        style={styles.button}
        disabled={selectedType === null}
        onPress={() =>
          selectedType === 'Client'
            ? navigation.navigate('SignInClientMainScreen')
            : navigation.navigate('SignInCompanyScreen')
        }
      />
      <View style={styles.footer}>
        <Text isCenterAlign color={'#9C9C9D'}>
          You can always switch accounts later
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, justifyContent: 'center'},

  buttons_wrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    marginRight: 10,
  },

  button: {
    marginBottom: '4%',
    width: '100%',
    height: 40,
  },

  footer: {
    marginBottom: 35,
  },
});

export default memo(ShallowContent, memoComparison);

// PLUGINS IMPORTS //
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/FormComponents';
import {Switch, TouchableRipple} from 'react-native-paper';
import {auth} from '~/API/FirebaseConfig';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS
import {Context} from '~/Content/NavigationCenter/Helpers/Context';

/////////////////////////////////////////////////////////////////////////////

const ClientContent = () => {
  const {theme, toggleTheme} = useContext(Context);

  return (
    <>
      <TouchableRipple onPress={toggleTheme}>
        <View pointerEvents="none">
          <Switch value={theme === 'dark'} />
        </View>
      </TouchableRipple>

      <Text onPress={() => auth.signOut()}>Logout</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default ClientContent;

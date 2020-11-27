// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

// COMPONENTS IMPORTS //
import ClientContent from './ClientContent/ClientContent';
import CompanyContent from './CompanyContent/CompanyContent';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

// REDUX
import {getUserDataSelector} from '~/Redux/Selectors/AuthSelectors';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  route: {params: any};
}

const ProfileScreen: FC<PropsType> = (props) => {
  const {isClient, UserUID} = props.route.params;
  const userData = useSelector(getUserDataSelector);
  const isAdmin = UserUID !== undefined ? UserUID === userData.UID : true;

  return (
    <ScrollView>{isClient ? <ClientContent /> : <CompanyContent />}</ScrollView>
  );
};

export default memo(ProfileScreen, memoComparison);

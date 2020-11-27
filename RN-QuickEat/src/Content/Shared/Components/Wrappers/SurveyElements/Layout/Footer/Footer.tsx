// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {FloatingButton} from '~/Content/Shared/Components/FormComponents';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  onSubmit: () => void;
  navigationTo: string;
  isLast: boolean;
}

const Footer: FC<PropsType> = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <FloatingButton
        onPress={() =>
          props.isLast
            ? props.onSubmit()
            : navigation.navigate(props.navigationTo)
        }
        icon={
          props.isLast ? (
            <Ionicons name={'checkmark'} size={24} color={'black'} />
          ) : (
            <Feather name={'arrow-right'} size={24} color={'black'} />
          )
        }
      />
    </>
  );
};

export default memo(Footer, memoComparison);

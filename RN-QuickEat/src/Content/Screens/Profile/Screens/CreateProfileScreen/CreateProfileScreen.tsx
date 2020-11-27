// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

// COMPONENTS IMPORTS //
import {Footer} from '~/Content/Shared/Components/Wrappers/SurveyElements';
import Body from './Body/Body';

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

// REDUX
import {createServiceThunkCreator} from '~/Redux/Reducers/ServicesReducers/ServicesSetReducer';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  route: {
    params: {
      type: SlidesType;
      index: number;
      totalLength: number;
      isLast: boolean;
    };
  };
}

const CreateProfileScreen: FC<PropsType> = (props) => {
  const {type, isLast} = props.route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <Body type={type} />
      <Footer
        isLast={isLast}
        navigationTo={'CreateServiceScreen1'}
        onSubmit={() => {
          dispatch(createServiceThunkCreator());
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default memo(CreateProfileScreen, memoComparison);
export type SlidesType = 'UserTypeCred' | 'CompanyTypeCred';
export const SlidesData: Array<SlidesType> = [
  'UserTypeCred',
  'CompanyTypeCred',
];

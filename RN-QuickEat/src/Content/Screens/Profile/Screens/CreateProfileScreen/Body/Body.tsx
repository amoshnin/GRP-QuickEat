// PLUGINS IMPORTS //
import React, {memo, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// COMPONENTS IMPORTS //
import {SectionItem} from '~/Content/Shared/Components/Wrappers/SurveyElements';
import InfoContent from './InfoContent/InfoContent';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

// REDUX
import {
  ActionCreatorsList as ServiceTempReducerActionCreatorsList,
  CreateServiceStateType,
} from '~/Redux/Reducers/ServicesReducers/ServicesTempReducer';
import {getTempServicesStateSelector} from '~/Redux/Selectors/ServicesSelectors';

import {SlidesType} from '../CreateProfileScreen';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  type: SlidesType;
}

const Body: FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(getTempServicesStateSelector);
  const {changeStateActionCreator} = ServiceTempReducerActionCreatorsList;

  const changeState = (data: CreateServiceStateType) => {
    dispatch(changeStateActionCreator(data));
  };

  return (
    <View style={styles.wrapper}>
      {props.type === 'CompanyTypeCred' ? (
        <InfoContent state={state} changeState={changeState} />
      ) : (
        <SectionItem title={'Choose the category of your service'}>
          <></>
        </SectionItem>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
  },
});

export default memo(Body, memoComparison);

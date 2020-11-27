// PLUGINS IMPORTS //
import React, {memo, FC, useCallback} from 'react';
import {TextInput} from '~/Content/Shared/Components/FormComponents';
import {ScrollView} from 'react-native-gesture-handler';

// COMPONENTS IMPORTS //
import {
  SectionItem,
  ImageSkeleton,
  Image,
} from '~/Content/Shared/Components/Wrappers/SurveyElements';
import {
  memoComparison,
  concat,
} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS

// REDUX
import {CreateServiceStateType} from '~/Redux/Reducers/ServicesReducers/ServicesTempReducer';
import {StyleSheet} from 'react-native';

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  state: CreateServiceStateType;
  changeState: (data: CreateServiceStateType) => void;
}

const InfoContent: FC<PropsType> = (props) => {
  const removeImage = useCallback(
    (uri: string) => {
      props.changeState({
        photos: props.state.photos?.filter((item) => item !== uri),
      });
    },
    [props.state],
  );

  return (
    <>
      <SectionItem title={"What's the name of your service?"}>
        <TextInput
          value={props.state.title}
          onChangeText={(text) => props.changeState({title: text})}
        />
      </SectionItem>
      <SectionItem title={'Attach photos to your service'}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll_wrap}>
          <ImageSkeleton
            returnFunction={(images) =>
              props.changeState({
                photos: concat(props.state.photos, images),
              })
            }
          />
          {props.state.photos &&
            props.state.photos.map((uri) => (
              <Image key={uri} uri={uri} onRemove={() => removeImage(uri)} />
            ))}
        </ScrollView>
      </SectionItem>
    </>
  );
};

const styles = StyleSheet.create({
  scroll_wrap: {overflow: 'visible'},
});

export default memo(InfoContent, memoComparison);

// PLUGINS IMPORTS //
import React, {useState, useRef, useEffect, ReactNode, memo} from 'react';
import {View, Dimensions, StyleSheet, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import * as Progress from 'react-native-progress';
import {Formik} from 'formik';
import * as yup from 'yup';

// COMPONENTS IMPORTS //
import SliderItem from './SliderItem/SliderItem';
import {SlideType} from '../../index';
import Header from '../Shared/Elements/Header/Header';

import {Button} from '../Shared/Components';

// EXTRA IMPORTS //
import {
  ProgressBarStyleType,
  ButtonStyleType,
  TextStyleType,
} from '../Shared/Types/Types';

////////////////////////////////////////////////////////////////////////////

type PropsType = {
  initialValues: any;
  data: Array<SlideType>;

  wrapperStyle?: ViewStyle;
  textStyle?: TextStyleType;
  textInputStyle?: ViewStyle;

  buttonStyle?: ButtonStyleType;
  buttonIcon?: ReactNode;

  progressBarStyle?: ProgressBarStyleType;

  submitFunction: (values: any) => Promise<void>;
  errorText?: string;
};

const {width} = Dimensions.get('screen');
const Slider: React.FC<PropsType> = (props) => {
  const [backClicked, setBackClicked] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const [percentage, setPercentage] = useState<number>(0.2);
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const carousel = useRef(null) as any;
  const navigation = useNavigation();

  useEffect(() => {
    if (backClicked) {
      if (carousel.current && carousel.current.currentIndex > 0) {
        carousel.current.snapToPrev();
      } else {
        navigation.goBack();
      }
      setBackClicked && setBackClicked(false);
    }
  }, [backClicked]);

  const item = props.data[currentIndex];
  return (
    <View style={[styles.wrapper, props.wrapperStyle]}>
      <Header
        index={currentIndex}
        totalLength={props.data.length}
        onBackClicked={() => setBackClicked(true)}
      />
      <Progress.Bar
        progress={percentage}
        width={props.progressBarStyle?.width || 130}
        borderRadius={props.progressBarStyle?.borderRadius || 2}
        height={props.progressBarStyle?.height || 3}
        color={props.progressBarStyle?.color || 'white'}
        unfilledColor={props.progressBarStyle?.unfilledColor || '#313636'}
        borderWidth={props.progressBarStyle?.borderWidth || 0}
        style={[styles.bar, props.progressBarStyle?.styles]}
      />
      <Formik
        validationSchema={yup.object({
          [item.value]: item.validation,
        })}
        initialValues={props.initialValues}
        enableReinitialize
        onSubmit={(values: any, {setErrors}) => {
          if (props.data.length === currentIndex + 1) {
            props
              .submitFunction(values)
              .then(() => {})
              .catch((error) => {
                console.log(error);
                setErrorVisible(true);
              });
          }
          item.onChangeSlide && item.onChangeSlide(values[item.value]);
          carousel.current.snapToNext();
        }}>
        {(FormikProps) => {
          useEffect(() => {
            if (errorVisible) {
              setErrorVisible(false);
            }
          }, [FormikProps.values.field]);

          useEffect(() => {
            if (formSubmitted) {
              console.log(FormikProps.values);
              FormikProps.handleSubmit();
              setFormSubmitted(false);
            }
          }, [formSubmitted]);

          useEffect(() => {
            FormikProps.errors.field && setFormSubmitted(false);
          }, [FormikProps.errors.field]);

          useEffect(() => {
            console.log(FormikProps.values);
          }, [FormikProps.values]);

          return (
            <>
              <Carousel
                ref={carousel}
                data={props.data}
                renderItem={({item}: {item: SlideType}) => (
                  <SliderItem
                    item={item}
                    FormikProps={FormikProps}
                    //
                    errorText={props.errorText}
                    errorVisible={errorVisible}
                    //
                    textStyle={props.textStyle}
                    textInputStyle={props.textInputStyle}
                  />
                )}
                sliderWidth={width}
                itemWidth={width}
                scrollEnabled={false}
                removeClippedSubviews={false}
                onSnapToItem={(index) => {
                  setPercentage((index + 0.1) * 0.5);
                  setCurrentIndex(index);
                }}
              />

              <Button
                backgroundColor={props.buttonStyle?.backgroundColor || 'white'}
                style={[styles.button, props.buttonStyle?.styles]}
                onPress={() => setFormSubmitted(true)}
                icon={props.buttonIcon}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
  },

  bar: {
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: -5,
  },

  button: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    marginBottom: 20,
  },
});

export default memo(Slider);

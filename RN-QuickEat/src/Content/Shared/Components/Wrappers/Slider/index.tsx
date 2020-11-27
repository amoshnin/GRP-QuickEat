// PLUGINS IMPORTS //
import React, {ReactNode, memo} from 'react';
import {ViewStyle} from 'react-native';

// COMPONENTS IMPORTS //
import Slider from './src/Content/Slider';

// EXTRA IMPORTS //
import {
  ProgressBarStyleType,
  ButtonStyleType,
  TextStyleType,
} from './src/Shared/Types/Types';

////////////////////////////////////////////////////////////////////////////

type PropsType = {
  initialValues: any;
  data: Array<SlideType>;

  wrapperStyle?: ViewStyle;
  textStyle?: TextStyleType;
  textInputStyle?: ViewStyle;
  progressBarStyle?: ProgressBarStyleType;

  buttonStyle?: ButtonStyleType;
  buttonIcon?: ReactNode;

  errorText?: string;
  submitFunction: (values: any) => Promise<void>;
};

const Index: React.FC<PropsType> = (props) => {
  return (
    <Slider
      data={props.data}
      //
      initialValues={props.initialValues}
      //
      errorText={props.errorText}
      submitFunction={props.submitFunction}
      //
      wrapperStyle={props.wrapperStyle}
      textStyle={props.textStyle}
      buttonStyle={props.buttonStyle}
      textInputStyle={props.textInputStyle}
      progressBarStyle={props.progressBarStyle}
      //
      buttonIcon={props.buttonIcon}
    />
  );
};

export default memo(Index);

export interface SlideType {
  title: string;
  subtitle: string;
  value: string;
  validation: any;

  inputType?: 'DEFAULT' | 'PHONE' | 'SMS_CODE';
  onChangeSlide?: (value: string) => void;

  button?: {
    text: string;
    onPress: () => void;
  };
}

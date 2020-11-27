import {ViewStyle, TextStyle} from 'react-native';

export type ProgressBarStyleType = {
  width?: number;
  height?: number;
  borderRadius?: number;
  //
  color?: string;
  unfilledColor?: string;
  //
  borderWidth?: number;
  borderColor?: number;
  styles?: ViewStyle;
};

export type ButtonStyleType = {
  styles?: ViewStyle;
  backgroundColor?: string;
};

export type TextStyleType = {
  text: TextStyle;
  errorText: TextStyle;
};

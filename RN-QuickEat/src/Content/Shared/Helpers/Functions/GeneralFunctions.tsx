import {shallowEqual} from 'react-redux';

export const memoComparison = (prevProps: any, nextProps: any) => {
  return shallowEqual(prevProps, nextProps);
};

export const renderTime = (seconds: number) => {
  const format = (val: number) => `0${Math.floor(val)}`.slice(-2);
  const minutes = (seconds % 3600) / 60;
  return [minutes, seconds % 60].map(format).join(':');
};

export const randomID = (): string => {
  const CHARS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let ID = '';

  for (let i = 0; i < 20; i++) {
    ID += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return ID;
};

export const concat = (...arrays: any) =>
  [].concat(...arrays.filter(Array.isArray));

export const convertToBlob = async (uri: string) => {
  const photo = await fetch(uri);
  const blob = await photo.blob();
  return blob;
};

export const truncate = (string: string, wordsNum: number) => {
  return string.split(' ').splice(0, wordsNum).join(' ');
};

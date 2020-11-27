import {DefaultTheme, DarkTheme} from 'react-native-paper';

const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },

  extreme: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
};

const roundness = 12;
export const Theme = {
  Light: {
    ...DefaultTheme,
    roundness,
    colors: {
      ...DefaultTheme.colors,
      primary: '#007AFF',
      card: '#fff',
    },
    shadows,
  },

  Dark: {
    ...DarkTheme,
    roundness,
    colors: {
      ...DarkTheme.colors,
      primary: '#007AFF',
      background: '#1F1E1E',
      surface: '#292828',
      card: '#29292D',
    },
    shadows,
  },
};

export const HeaderStyles = {
  icon: {
    marginHorizontal: 16,
  },
};

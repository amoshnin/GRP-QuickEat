import React from 'react';

interface PreferencesContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Context = React.createContext<PreferencesContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

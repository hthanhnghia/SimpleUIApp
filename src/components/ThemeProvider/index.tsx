import { THEMES, DEFAULT_THEME, ThemeType } from '../../themes';
import React, { createContext, useContext } from 'react';

interface ThemeProviderType {
  themeName: string;
  children: any;
}

export const ThemeCtx = createContext<ThemeType>(DEFAULT_THEME);

const ThemeProvider = ({ themeName, children }: ThemeProviderType) => {
  return (
    <ThemeCtx.Provider value={THEMES[themeName]}>{children}</ThemeCtx.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeCtx);
};

export default ThemeProvider;

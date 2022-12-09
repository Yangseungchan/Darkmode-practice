import { ReactNode, createContext, useEffect, useContext, useState } from 'react';

const getInitialColorMode = () => {
  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  return 'dark';
};

interface ColorModeContextValue {
  colorMode: string | null;
  setColorMode: (value: string) => void;
}

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setRawColorMode] = useState(getInitialColorMode);

  const setColorMode = (value: string) => {
    setRawColorMode(value);
    window.localStorage.setItem('color-mode', value);
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorModeContext = () => {
  const context = useContext(ColorModeContext);
  if (context === null) {
    throw new Error('useColorModeContext must be used within a ThemeProvider');
  }
  return context;
};

export { ColorModeProvider, useColorModeContext };

import { ReactNode, createContext, useEffect, useRef, useContext, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

interface ColorModeContextValue {
  colorMode: string | null;
  setColorMode: (value: string) => void;
}

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setRawColorMode] = useState('dark');
  const systemPrefers = useMediaQuery('(prefers-color-scheme: dark)');
  const firstRender = useRef(true);

  const setColorMode = (value: string) => {
    setRawColorMode(value);
    window.localStorage.setItem('color-mode', value);
  };

  useEffect(() => {
    if (firstRender.current) {
      const osTheme = systemPrefers ? 'dark' : 'light';
      const userTheme = window.localStorage.getItem('color-mode');
      const theme = userTheme || osTheme;
      setRawColorMode(theme);
      firstRender.current = false;
    } else {
      setRawColorMode(systemPrefers ? 'dark' : 'light');
    }
  }, [systemPrefers]);

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

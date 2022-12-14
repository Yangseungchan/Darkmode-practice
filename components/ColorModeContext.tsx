import {
  ReactNode,
  createContext,
  useEffect,
  useRef,
  useContext,
  useState,
  useCallback,
} from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { COLOR_MODE_KEY, themeProperties } from '../styles/theme';

type ThemeMode = 'light' | 'dark';

interface ColorModeContextValue {
  colorMode: string | undefined;
  setColorMode: (value: ThemeMode) => void;
}

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setRawColorMode] = useState<string | undefined>(undefined);
  const systemPrefers = useMediaQuery('(prefers-color-scheme: dark)');
  const firstRender = useRef(true);

  const setColorMode = useCallback((value: ThemeMode) => {
    const root = window.document.documentElement;

    Object.entries(themeProperties).forEach(([name, colorByTheme]) => {
      const cssVarName = `--${name}`;
      root.style.setProperty(cssVarName, colorByTheme[value]);
    });

    setRawColorMode(value);
    window.localStorage.setItem(COLOR_MODE_KEY, value);
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      const osTheme = systemPrefers ? 'dark' : 'light';
      const userTheme = window.localStorage.getItem(COLOR_MODE_KEY);
      const theme = userTheme || osTheme;
      setRawColorMode(theme);
      firstRender.current = false;
    } else {
      setColorMode(systemPrefers ? 'dark' : 'light');
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

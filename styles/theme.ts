import { Theme } from '@emotion/react';

const lightTheme: Theme = {
  mode: 'light',
  text: 'black',
  background: '#fafafa',
  borderColor: '#eaeaea',
  bodyColor: 'white',
};

const darkTheme: Theme = {
  mode: 'dark',
  text: 'white',
  background: '#111',
  borderColor: '#222',
  bodyColor: 'black',
};

const COLOR_MODE_KEY = 'color-mode';
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

const themeProperties = {
  'mode-color': {
    light: lightTheme.mode,
    dark: darkTheme.mode,
  },
  'text-color': {
    light: lightTheme.text,
    dark: darkTheme.text,
  },
  'background-color': {
    light: lightTheme.background,
    dark: darkTheme.background,
  },
  'border-color': {
    light: lightTheme.borderColor,
    dark: darkTheme.borderColor,
  },
  'body-color': {
    light: lightTheme.bodyColor,
    dark: darkTheme.bodyColor,
  },
};

export { lightTheme, darkTheme, themeProperties, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP };

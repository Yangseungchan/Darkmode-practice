import { ThemeProvider, Theme } from '@emotion/react';
import { isWhiteSpaceLike } from 'typescript';

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

export { lightTheme, darkTheme };

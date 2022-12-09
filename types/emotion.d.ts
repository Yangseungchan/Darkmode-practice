import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mode: 'light' | 'dark';
    text: string;
    background: string;
    borderColor: string;
    bodyColor: string;
  }
}

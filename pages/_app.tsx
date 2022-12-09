import type { AppProps } from 'next/app';
import ThemeProvider from '../components/ThemeProvider';
import { ColorModeProvider } from '../components/ColorModeContext';
import GlobalStyles from '../styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeProvider>
  );
}

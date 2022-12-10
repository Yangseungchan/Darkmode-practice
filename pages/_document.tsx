import { Html, Head, Main, NextScript } from 'next/document';
import ScriptTag from '../styles/InlineScript';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ScriptTag />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { useColorModeContext } from './ColorModeContext';
import { useEffect, useRef } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const SystemDarkMode = () => {
  const { setColorMode } = useColorModeContext();
  const firstRender = useRef(true);

  //   const systemPrefers = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
  const systemPrefers = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (firstRender.current) {
      // mount(첫 렌더링) 시에는 effect가 발생하지 않도록 함
      firstRender.current = false;
      return;
    }

    setColorMode(systemPrefers ? 'dark' : 'light');
  }, [systemPrefers]);

  return null;
};

export default SystemDarkMode;

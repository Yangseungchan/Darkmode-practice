import { COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP, themeProperties } from './theme';

export function setColorsByTheme() {
  const modeProperties = '[MODEPROPERTIES]';
  const colorModeKey = '[COLORMODEKEY]';
  const colorModeCssProp = '[COLORMODECSSPROP]';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMq = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'dark'; // default to dark

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMq ? 'dark' : 'light';
  }

  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  // generating css variables based on modeProperties
  Object.entries(modeProperties).forEach(([name, colorByTheme]) => {
    const cssVarName = `--${name}`;
    // @ts-ignore
    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const ScriptTag = () => {
  const stringifyFn = String(setColorsByTheme)
    // eslint-disable-next-line quotes
    .replace('"[MODEPROPERTIES]"', JSON.stringify(themeProperties))
    .replace('[COLORMODEKEY]', COLOR_MODE_KEY)
    .replace('[COLORMODECSSPROP]', INITIAL_COLOR_MODE_CSS_PROP);

  const fnToRunOnClient = `(${stringifyFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: fnToRunOnClient }} />;
};

export default ScriptTag;

const COLOR_MODE_KEY = 'color-mode';
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

function setColorsByTheme() {
  const modeProperties = '[modeProperties]';
  const colorModeKey = '[colorModeKey]';
  const colorModeCssProp = '[colorModeCssProp]';

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
  const codeToRunOnClient = `(function() {
  alert("다크모드 개선하자!");
})()`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export { ScriptTag };

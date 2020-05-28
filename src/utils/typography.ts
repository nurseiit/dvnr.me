import Typography from 'typography';
import SutroTheme from 'typography-theme-sutro';

delete SutroTheme.googleFonts;

// eslint-disable-next-line
SutroTheme.overrideThemeStyles = ({ rhythm }): any => ({
  'h1,h2,h3,h4,h5,h6': {
    marginTop: rhythm(1 / 2),
  },
  h1: {
    fontSize: rhythm(1),
    fontWeight: 700,
    letterSpacing: '-1px',
  },
  h2: {
    fontSize: rhythm(5 / 6),
  },
  code: {
    fontSize: rhythm(3 / 5),
    borderRadius: '0.2em',
    padding: '0.15em 0.2em 0.05em',
    whiteSpace: 'normal',
  },
});

const typography = new Typography(SutroTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;

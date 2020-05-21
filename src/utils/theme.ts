export interface Theme {
  background: string;
  textColor: string;
  accentBackground: string;

  heading: string;

  links: string;
  hoveredLinks: string;

  shadowColor: string;
  borderColor: string;

  headerBg: string;
  footerBg: string;

  buttonBg: string;
  hoveredButtonBg: string;
  grayButtonBg: string;
  grayHoveredButtonBg: string;

  inlineCodeColor: string;
  inlineCodeBg: string;
}

export const theme = {
  blue: `#44AAE5`,
  darkBlue: `#190c65`,
  darkerBlue: `#150956`,
  darkestBlue: `#0f073b`,
  lightBlue: `#1f59cd`,
  lighterBlue: `#279AF1`,
  lightestBlue: `#C1DFF0`,

  green: `#3f7912`,
  darkGreen: `#0c511a`,
  lightGreen: `#00d69b`,
  paleDarkGreen: `#104F55`,

  yellow: `#f9ff00`,
  darkYellow: `#d0d500`,
  lightYellow: `#fbff6c`,

  orange: `#EE7769`,
  darkOrange: `#ff9100`,
  lightOrange: `#ffbe41`,

  gray: `#464849`,
  darkGray: `#3d3d3d`,
  darkerGray: `#000311`,
  darkestGray: `#060606`,
  lightGray: `#bcbcbc`,
  lighterGray: `#e5e5e5`,
  lightestGray: `#f7f7f7`,
};

const lightThemeBase = {
  background: `white`,
  textColor: `black`,
  accentBackground: theme.lightestGray,

  heading: theme.darkestBlue,

  links: theme.blue,
  hoveredLinks: theme.orange,

  shadowColor: `#dbdbdb`,
  borderColor: theme.lighterGray,

  headerBg: theme.darkerBlue,
  footerBg: theme.darkerGray,

  buttonBg: theme.blue,
  hoveredButtonBg: theme.lightBlue,
  grayButtonBg: theme.lightestGray,
  grayHoveredButtonBg: theme.orange,

  inlineCodeColor: '#1a1a1a',
  inlineCodeBg: 'rgba(255, 229, 100, 0.2)',
};

const darkThemeBase = {
  background: theme.darkerGray,
  textColor: theme.lighterGray,
  accentBackground: theme.darkestGray,

  heading: theme.lightestBlue,

  links: theme.lighterBlue,
  hoveredLinks: theme.orange,

  shadowColor: `#1f1f1f`,
  borderColor: `black`,

  headerBg: theme.darkestBlue,
  footerBg: theme.darkestGray,

  buttonBg: theme.darkGreen,
  hoveredButtonBg: theme.green,
  grayButtonBg: theme.darkGray,
  grayHoveredButtonBg: theme.orange,

  inlineCodeColor: '#e6e6e6',
  inlineCodeBg: 'rgba(115, 124, 153, 0.2)',
};

export const darkTheme: Theme = { ...theme, ...darkThemeBase };
export const lightTheme: Theme = { ...theme, ...lightThemeBase };

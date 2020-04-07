export interface Theme {
  background: string;
  textColor: string;
  accentBackground: string;

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
}

export const theme = {
  blue: `#2202a9`,
  darkBlue: `#190c65`,
  darkerBlue: `#150956`,
  darkestBlue: `#0f073b`,
  lightBlue: `#1f59cd`,
  lighterBlue: `#279AF1`,
  lightestBlue: `#83aaff`,

  green: `#3f7912`,
  darkGreen: `#0c511a`,
  lightGreen: `#00d69b`,
  paleDarkGreen: `#104F55`,

  yellow: `#f9ff00`,
  darkYellow: `#d0d500`,
  lightYellow: `#fbff6c`,

  orange: `#efbf00`,
  darkOrange: `#ff9100`,
  lightOrange: `#ffbe41`,

  gray: `#464849`,
  darkGray: `#3d3d3d`,
  darkerGray: `#1a1d23`,
  darkestGray: `#060606`,
  lightGray: `#bcbcbc`,
  lighterGray: `#e5e5e5`,
  lightestGray: `#f7f7f7`,
};

export const lightTheme = {
  background: `white`,
  textColor: `black`,
  accentBackground: theme.lightestGray,

  links: theme.blue,
  hoveredLinks: theme.orange,

  shadowColor: theme.lighterGray,
  borderColor: theme.lighterGray,

  headerBg: theme.darkerBlue,
  footerBg: theme.darkerGray,

  buttonBg: theme.blue,
  hoveredButtonBg: theme.lightBlue,
  grayButtonBg: theme.lightestGray,
  grayHoveredButtonBg: theme.orange,

  inlineCodeColor: theme.lighterGray,
};

export const darkTheme = {
  background: theme.darkerGray,
  textColor: theme.lighterGray,
  accentBackground: theme.darkestGray,

  links: theme.lighterBlue,
  hoveredLinks: theme.orange,

  shadowColor: `black`,
  borderColor: `black`,

  headerBg: theme.darkestBlue,
  footerBg: theme.darkestGray,

  buttonBg: theme.darkGreen,
  hoveredButtonBg: theme.green,
  grayButtonBg: theme.darkGray,
  grayHoveredButtonBg: theme.orange,

  inlineCodeColor: theme.darkGray,
};

export default (darkMode: boolean): Theme =>
  darkMode ? { ...theme, ...darkTheme } : { ...theme, ...lightTheme };
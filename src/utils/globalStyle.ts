import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

interface Props {
  theme: Theme;
}

export default createGlobalStyle`
  body {
    background: ${(props: Props): string => props.theme.background};
    color: ${(props: Props): string => props.theme.textColor};
    a {
      text-decoration: none;
      color: ${(props: Props): string => props.theme.links};
      :hover {
        color: ${(props: Props): string => props.theme.hoveredLinks};
      }
    }
    code {
      background: ${(props: Props): string => props.theme.inlineCodeBg};
      color: ${(props: Props): string => props.theme.inlineCodeColor};
    }

    blockquote {
      margin-left: 1em;
      font-size: 1em;
      border-left: 3px solid ${(props: Props): string =>
        props.theme.inlineCodeColor};
      color: ${(props: Props): string => props.theme.inlineCodeColor};
    }
  }
`;

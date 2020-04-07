import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

interface Props {
  theme: Theme;
}

export default createGlobalStyle`
  body {
    margin: 0;
    hyphens: auto;
    background: ${(props: Props): string => props.theme.background};
    color: ${(props: Props): string => props.theme.textColor};
    a {
      text-decoration: none;
      color: ${(props: Props): string => props.theme.links};
      :hover {
        color: ${(props: Props): string => props.theme.hoveredLinks};
      }
    }
  }
`;

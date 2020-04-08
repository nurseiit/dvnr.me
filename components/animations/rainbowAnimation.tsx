import { keyframes } from 'styled-components';

const rainbowAnimation = keyframes`
  from {
    -webkit-filter:hue-rotate(10deg);
    filter:hue-rotate(10deg);
  }
  to {
    -webkit-filter:hue-rotate(360deg);
    filter:hue-rotate(360deg);
  }
`;

export default rainbowAnimation;

import { keyframes } from 'styled-components';

const waveAnimation = keyframes`
    0% { transform: rotate(  0.0deg) }
   10% { transform: rotate(-10.0deg) }    /* The following four values can be played with to make the waving more or less extreme */
   20% { transform: rotate( 12.0deg) }
   30% { transform: rotate(-10.0deg) }
   40% { transform: rotate(  9.0deg) }
   50% { transform: rotate(  0.0deg) }    /* Reset for the last half to pause */
  100% { transform: rotate(  0.0deg) }
`;

export default waveAnimation;

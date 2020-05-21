/* eslint react/jsx-props-no-spreading: 0 */
import styled from 'styled-components';
import Code from './code';

const img = styled.img`
  max-width: 125%;
  margin-left: -12.5%;
  @media (max-width: 825px) {
    max-width: 100%;
    margin-left: 0;
  }
  margin-bottom: 1.3em;
`;

export default {
  img,
  code: Code,
};

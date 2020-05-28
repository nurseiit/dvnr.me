import styled from 'styled-components';
import Code from './code';

const img = styled.img`
  min-width: 125%;
  max-width: 125%;
  margin-left: -12.5%;
  @media (max-width: 875px) {
    max-width: 100%;
    min-width: 100%;
    margin-left: 0;
  }
  margin-bottom: 1.3em;
`;

const ul = styled.ul`
  padding-left: 30px;
`;
const ol = styled.ol`
  padding-left: 30px;
`;

export default {
  img,
  ol,
  ul,
  code: Code,
};

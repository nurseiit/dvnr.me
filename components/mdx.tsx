/* eslint react/jsx-props-no-spreading: 0 */
import styled, { css } from 'styled-components';
import Code from './code';

const Wrapper = styled.main`
  margin: 0 auto;
  padding: 0 0 10px 0;

  font-size: 0.94rem;
  font-weight: 300;
  line-height: 1.8;
`;
const a = styled.a`
  text-decoration: underline;
`;
const img = styled.img`
  max-width: 100%;
`;
const h = css`
  font-weight: 500;
  letter-spacing: -0.0125rem;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.2;
`;
const h1 = styled.h1`
  ${h}
  font-size: 1.7rem;
`;
const h2 = styled.h2`
  ${h}
  font-size: 1.5rem;
`;
const h3 = styled.h2`
  ${h}
  font-size: 1.3rem;
`;
const h4 = styled.h2`
  ${h}
  font-size: 1.1rem;
`;
const p = styled.p`
  margin: 10px 0;
`;
const list = css`
  margin: 0;
  padding: 0 0 0 5px;
  list-style-position: inside;
`;
const ul = styled.ul`
  ${list}
`;
const ol = styled.ol`
  ${list}
`;
export default {
  wrapper: Wrapper,
  a,
  img,
  code: Code,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
};

/* eslint react/jsx-props-no-spreading: 0 */
import React from 'react';
import { Link } from '@chakra-ui/core';

const Wrapper = ({ ...props }): JSX.Element => <div {...props} />;
const img = ({ ...props }): JSX.Element => <div {...props} />;
const pre = ({ ...props }): JSX.Element => <div {...props} />;
const code = ({ ...props }): JSX.Element => <div {...props} />;
const h1 = ({ ...props }): JSX.Element => (
  <div style={{ fontSize: '2em' }} {...props} />
);
const h2 = ({ ...props }): JSX.Element => (
  <div style={{ fontSize: '1.8em' }} {...props} />
);
const p = ({ ...props }): JSX.Element => <div {...props} />;
const ul = ({ ...props }): JSX.Element => <div {...props} />;
const ol = ({ ...props }): JSX.Element => <div {...props} />;

export default {
  wrapper: Wrapper,
  a: Link,
  img,
  pre,
  code,
  h1,
  h2,
  p,
  ul,
  ol
};

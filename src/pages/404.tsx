import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

const Centered = styled.div`
  text-align: center;
  font-size: 1.2em;
`;

const Image = styled.img`
  width: 50%;
`;

const BigText = styled.h2`
  font-size: 2em;
`;

const Error: NextPage = () => (
  <>
    <Centered>
      <Image src="/img/bear_error.png" />
    </Centered>
    <Centered>
      <BigText>404</BigText>
      <p>It&apos;s gone! Somebody jacked us! </p>
      <small style={{ fontSize: '0.6em' }}>
        &mdash; &quot;Our Stuff&quot;, Season 1, We Bare Bears
      </small>
    </Centered>
  </>
);

export default Error;

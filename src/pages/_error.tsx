import React, { FC } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

interface ErrorProps {
  statusCode: number;
}

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

const ErrorText: FC<ErrorProps> = ({ statusCode }) => (
  <>
    <Centered>
      <BigText>{statusCode}</BigText>
      <p>It&apos;s gone! Somebody jacked us! </p>
      <small style={{ fontSize: '0.6em' }}>
        &mdash; &quot;Our Stuff&quot;, Season 1, We Bare Bears
      </small>
    </Centered>
  </>
);

const Error: NextPage<ErrorProps> = ({ statusCode }) => (
  <>
    <Centered>
      <Image src="/img/bear_error.png" />
    </Centered>
    {statusCode && <ErrorText statusCode={statusCode} />}
    {!statusCode && <Centered>An error occurred on client</Centered>}
  </>
);

Error.getInitialProps = ({ res, err }): ErrorProps => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

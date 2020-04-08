import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import WavingHand from '../components/wavingHand';
import rainbowAnimation from '../components/animations/rainbowAnimation';

const Heading = styled.h2`
  font-size: 1.3em;
  display: inline-block;
`;

const Image = styled.img`
  border-radius: 10px;
  &:hover {
    animation: ${rainbowAnimation} 1.5s infinite;
  }
`;

const AboutPage: NextPage = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Image
          alt="Me hugging a mythical creature statue in Macau."
          src="/img/avatar.jpg"
          width="50%"
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <WavingHand />{' '}
        <Heading>
          Hello, I&apos;m <a href="https://github.com/nurseiit">@nurseiit</a>!
        </Heading>
      </div>
    </>
  );
};

export default AboutPage;

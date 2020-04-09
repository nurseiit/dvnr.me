import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import WavingHand from '../components/wavingHand';
import rainbowAnimation from '../components/animations/rainbowAnimation';

const Heading = styled.h2`
  font-size: 1.3em;
  display: inline-block;
`;

const BodyTitle = styled.h3`
  font-size: 1.4em;
  font-weight: 100;
  margin-top: 1.2em;
`;

const BodyPart = styled.h4`
  font-size: 1.1em;
  margin-bottom: -0.5em;
`;

const Centered = styled.div`
  text-align: center;
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
      <Centered>
        <Image
          alt="Me hugging a mythical creature statue in Macau."
          src="/img/avatar.jpg"
          width="50%"
        />
      </Centered>
      <Centered>
        <WavingHand />{' '}
        <Heading>
          Hello, I&apos;m <a href="https://github.com/nurseiit">@nurseiit</a>!
        </Heading>
      </Centered>
      <Centered>
        <BodyPart>
          Software Engineering Enthusiast based in{' '}
          <span
            style={{ fontSize: '1.3em' }}
            aria-label="Kazakhstan flag"
            role="img"
          >
            🇰🇿
          </span>
        </BodyPart>
        <BodyPart>
          Junior student at <a href="https://unist.ac.kr">UNIST</a>{' '}
          <span
            style={{ fontSize: '1.3em' }}
            aria-label="South Korea flag"
            role="img"
          >
            🇰🇷
          </span>
        </BodyPart>
      </Centered>
      <br />
      <Centered>
        <BodyTitle>
          <span aria-label="back emoji" role="img">
            ⏪
          </span>{' '}
          Previously
        </BodyTitle>
        <hr style={{ borderTop: '0.1px solid grey', maxWidth: '300px' }} />

        <BodyPart>
          SWE Intern at <a href="https://hanbitco.com">Hanbitco</a>{' '}
          <span
            style={{ fontSize: '1.3em' }}
            aria-label="South Korea flag"
            role="img"
          >
            🇰🇷
          </span>
        </BodyPart>
        <BodyPart>
          Co-Founder and SWE at <a href="https://resta.io">RESTA</a>{' '}
          <span
            style={{ fontSize: '1.3em' }}
            aria-label="HongKong flag"
            role="img"
          >
            🇭🇰
          </span>
        </BodyPart>
        <BodyPart>
          Full-stack developer intern at{' '}
          <a href="https://avsoft.kz">AV Software</a>{' '}
          <span
            style={{ fontSize: '1.3em' }}
            aria-label="South Korea flag"
            role="img"
          >
            🇰🇿
          </span>
        </BodyPart>
        <BodyPart>
          Kazakh-Turkish High School alumni of 2017{' '}
          <span
            style={{ fontSize: '1.3em' }}
            aria-label="Turkey flag"
            role="img"
          >
            🇹🇷
          </span>
        </BodyPart>
      </Centered>
      <br />
    </>
  );
};

export default AboutPage;

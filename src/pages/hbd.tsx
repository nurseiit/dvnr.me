import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { NextPage } from 'next';
import styled from 'styled-components';

const CardShell = styled.div`
  cursor: pointer;
  margin: auto auto 50px auto;
  width: 320px;
  height: 450px;
  text-align: center;
  color: black;
  background-color: #f7f6f1;
  border-radius: 8px;
  border: 1px solid #dedede;
  box-shadow: 0 16px 32px 0 ${({ theme }): string => theme.shadowColor};
`;

const BackImg = styled.div`
  margin: -10px auto auto auto;
  height: 200px;
  width: 150px;
  background-image: url('/img/hbd_photo.jpg');
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid #dedede;
  box-shadow: 0 16px 32px 0 #dbdbdb;
`;

const CardFront = styled(CardShell)`
  background-image: url('/img/hearts_kama.jpg');
  background-size: cover;
`;

const CardBack = styled(CardShell)`
  background-image: url('/img/hearts_kama_back.jpg');
  background-size: cover;
`;

const Centered = styled.div`
  text-align: center;
  font-size: 1em;
  margin: 30px;
`;

const Hbd: NextPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e): void => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <Centered>Click on the card to flip it</Centered>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardFront onClick={handleClick} />

        <CardBack onClick={handleClick}>
          <div style={{ textAlign: 'left', margin: '20px' }}>
            <div style={{ marginBottom: '5px' }}>
              <b>From:</b> Nurs
            </div>
            <div>
              <b>To:</b> Kama
            </div>
          </div>
          <div>
            <BackImg />
            <div
              style={{
                fontFamily: 'Verdana',
                textAlign: 'justify',
                fontWeight: 200,
                fontSize: '0.8em',
                margin: '15px 20px 10px 20px',
                lineHeight: '1.5',
              }}
            >
              Туған күніңмен Камила! Мне очень повезло так близко подружиться с
              тобой. Джуниорам повезло что ты с нами вместе поступила &mdash; и
              вообще, Юнисту повезло что именно ты туда подала{' '}
              <span aria-label="laughing emoji" role="img">
                🤣
              </span>{' '}
              Екі дүние бақыты мен зор денсаулық тілеймін!
            </div>
            <div>Love you and miss you!</div>
          </div>
        </CardBack>
      </ReactCardFlip>
    </>
  );
};

export default Hbd;

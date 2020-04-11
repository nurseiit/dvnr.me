import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { NextPage } from 'next';
import styled from 'styled-components';

const CardShell = styled.div`
  margin: auto;
  width: 320px;
  height: 450px;
  text-align: center;
  color: black;
  background-color: #f7f6f1;
  border-radius: 8px;
  border: 1px solid #dedede;
  box-shadow: 0 16px 32px 0 ${({ theme }): string => theme.shadowColor};
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
      <Centered>Click on the card to flip</Centered>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardShell onClick={handleClick}>
          This is the front of the card.
        </CardShell>

        <CardShell onClick={handleClick}>
          This is the back of the card.
        </CardShell>
      </ReactCardFlip>
    </>
  );
};

export default Hbd;

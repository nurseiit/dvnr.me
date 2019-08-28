import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Details from '../../utils/details';

interface Props {
  children: JSX.Element;
  pathname: string;
}

const Background = styled.div`
  background: #221919;
  color: white;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 20px 15px;
  width: 100%;
`;

const Content = styled.div`
  font-size: 24px;
  line-height: 43px;
`;

const PostLayout = ({ children, pathname }: Props): JSX.Element => {
  const [details, setDetails] = useState<Details>(new Details('', ''));
  useEffect(() => {
    import(`../../pages/${pathname}.mdx`)
      .then(mod => mod.details)
      .then(setDetails);
  }, []);
  const { title, author } = details;
  return (
    <Background>
      <Container>
        <div>Title: {title}</div>
        <div>Author: {author}</div>
        <Content>{children}</Content>
        <style>
          {`
            img {
              max-width: 100%;
            }
          `}
        </style>
      </Container>
    </Background>
  );
};

export default PostLayout;

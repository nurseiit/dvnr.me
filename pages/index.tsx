import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { getPosts } from '../utils/posts';

const Title = styled.h3`
  font-size: 1.5rem;
  padding-top: 15px;
  color: #80a1d6;
  font-weight: 900;
`;

const Description = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  padding-top: 5px;
  padding-bottom: 15px;
`;

const CreatedAt = styled.small`
  font-size: 0.8rem;
  font-weight: 700;
  padding-top: 20px;
`;

const Index: NextPage = () => {
  const posts = getPosts();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Title>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </Title>
          <CreatedAt>{post.createdAt.format('MMMM D, YYYY')}</CreatedAt>
          <Description>{post.description}</Description>
        </div>
      ))}
    </div>
  );
};

export default Index;

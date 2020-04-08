import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { getPosts } from '../utils/posts';

const Title = styled.h2`
  font-size: 1.5rem;
  padding-top: 1rem;
  color: #80a1d6;
  font-weight: 900;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const CreatedAt = styled.small`
  font-size: 0.9rem;
  font-weight: 500;
`;

const Index: NextPage = () => {
  const posts = getPosts();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Title>
            <Link href={`/posts/${post.id}`}>
              <a href={`/posts/${post.id}`}>{post.title}</a>
            </Link>
          </Title>
          <CreatedAt>{post.createdAt.format('MMMM D, YYYY')}</CreatedAt>
          <Description>
            {'> '}
            {post.description}
          </Description>
        </div>
      ))}
    </div>
  );
};

export default Index;

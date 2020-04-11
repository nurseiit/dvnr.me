import React from 'react';
import Head from 'next/head';

import { h1 as Title } from './mdx';
import CreatedAt from './createdAt';
import { findPost } from '../utils/posts';

interface Props {
  id: string;
}

const PostInit = ({ id }: Props): JSX.Element => {
  const post = findPost(id);
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Title>{post.title}</Title>
      <CreatedAt>{post.createdAt.format('MMMM D, YYYY')}</CreatedAt>
      <p />
    </>
  );
};

export default PostInit;

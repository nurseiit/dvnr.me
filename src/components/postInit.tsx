import React from 'react';
import Head from 'next/head';

import { findPost } from '../utils/posts';
import { rhythm } from '../utils/typography';

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
      <h1 style={{ marginBottom: '0' }}>{post.title}</h1>
      <span style={{ fontSize: rhythm(1 / 2) }}>
        {post.createdAt.format('MMMM D, YYYY')}
      </span>
      <p />
    </>
  );
};

export default PostInit;

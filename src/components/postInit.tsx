import React from 'react';
import Head from 'next/head';
import { format } from 'date-fns';

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
        {format(post.createdAt, 'MMMM d, yyyy')}
      </span>
      <p />
    </>
  );
};

export default PostInit;

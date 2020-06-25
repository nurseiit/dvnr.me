import React from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import { BlogJsonLd } from 'next-seo';

import { findPost } from '../utils/posts';
import { rhythm } from '../utils/typography';

interface Props {
  id: string;
  imagePath?: string;
}

const PostInit = ({ id, imagePath }: Props): JSX.Element => {
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
      <BlogJsonLd
        url={`https://devnur.me/posts/${post.id}`}
        title={post.title}
        images={imagePath ? [`https://devnur.me${imagePath}`] : undefined}
        datePublished={post.createdAt.toISOString()}
        dateModified={post.updatedAt.toISOString()}
        authorName="Nurseiit A."
        description={post.description}
      />
    </>
  );
};

export default PostInit;

import React from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import { NextSeo } from 'next-seo';

import { findPost } from '../utils/posts';
import { rhythm } from '../utils/typography';

interface Props {
  id: string;
  imagePath: string;
}

const PostInit = ({
  id,
  imagePath = '/img/quitFacebookEcosystem-banner.jpg',
}: Props): JSX.Element => {
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

      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description,
          url: `https://dvnr.me/posts/${post.id}`,
          type: 'blog',
          locale: 'en_UK',
          images: [
            {
              url: `https://dvnr.me${imagePath}`,
            },
          ],
        }}
      />
    </>
  );
};

export default PostInit;

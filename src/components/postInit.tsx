import React from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import { NextSeo } from 'next-seo';
import useDarkMode from 'use-dark-mode';

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
  const { value } = useDarkMode();
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1 style={{ marginBottom: '0' }}>{post.title}</h1>
      <span style={{ fontSize: rhythm(1 / 2) }}>
        {format(post.createdAt, 'MMMM d, yyyy')}
      </span>
      <div
        style={{ display: 'flex', marginTop: '10px', marginBottom: '-30px' }}
      >
        <img
          src={`https://views.show/svg?key=${post.id}&size=23&fill=${
            value ? 'fff' : '212529'
          }&family=monospace`}
          alt=""
          width="300px"
          height="30px"
        />
      </div>
      <p />

      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description,
          url: `https://devnur.me/posts/${post.id}`,
          type: 'blog',
          locale: 'en_UK',
          images: [
            {
              url: `https://devnur.me${imagePath}`,
            },
          ],
        }}
      />
    </>
  );
};

export default PostInit;

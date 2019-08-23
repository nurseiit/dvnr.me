import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

import Content, { details } from './content.mdx';

const otherId = 'second-post';
const { title, author } = details;

const Post: NextPage = () => (
  <>
    <Link href="/" as="/">
      <a href="/">Main Page</a>
    </Link>
    <h2>Title: {title}</h2>
    <h3>Author: {author}</h3>
    <Content />
    <Link href={`/${otherId}`} as={`/${otherId}`}>
      <a href={`/${otherId}`}>Another Post</a>
    </Link>
  </>
);

export default Post;

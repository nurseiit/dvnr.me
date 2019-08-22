import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Error from 'next/error';
import { NextPage } from 'next';

import FirstPost, { title, author } from '../../posts/first-post/index.mdx';

const allPosts = ['first-post', 'second-post'];
const postExists = (id: string): boolean => {
  return allPosts.includes(id);
};

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id !== 'undefined' && !postExists(id as string))
    return <Error statusCode={404} />;
  const otherId = id !== 'first-post' ? 'first-post' : 'second-post';

  return (
    <>
      <Link href="/post" as="/post">
        <a href="/post">All posts</a>
      </Link>
      <h2>Title: {title}</h2>
      <h3>Author: {author}</h3>
      <FirstPost />
      <Link href="/post/[id]" as={`/post/${otherId}`}>
        <a href={`/post/${otherId}`}>Another Post</a>
      </Link>
    </>
  );
};

export default Post;

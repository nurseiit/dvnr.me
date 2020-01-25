import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { getPosts } from '../utils/posts';

const Index: NextPage = () => {
  const posts = getPosts();
  return (
    <>
      <b>All posts</b>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;

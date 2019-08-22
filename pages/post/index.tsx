import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const allPosts = ['first-post', 'second-post'];

const Post: NextPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    All posts
    {allPosts.map(postId => (
      <Link key={postId} href="/post/[id]" as={`/post/${postId}`}>
        <a href={`/post/${postId}`}>Another Post</a>
      </Link>
    ))}
  </div>
);

export default Post;

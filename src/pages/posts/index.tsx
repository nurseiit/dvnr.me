import React, { useEffect } from 'react';
import Router from 'next/router';
import { NextPage } from 'next';

const Posts: NextPage = () => {
  useEffect(() => {
    Router.push('/');
  }, []);
  return <div style={{ textAlign: 'center' }}>Redirecting...</div>;
};

export default Posts;

import React from 'react';

interface Props {
  children: JSX.Element;
}

const PostLayout = ({ children }: Props): JSX.Element => {
  return <div style={{ background: 'blue' }}>{children}</div>;
};

export default PostLayout;

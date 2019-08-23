import React from 'react';

interface Props {
  children: JSX.Element;
}

const PageLayout = ({ children }: Props): JSX.Element => {
  return <div style={{ background: 'grey' }}>{children}</div>;
};

export default PageLayout;

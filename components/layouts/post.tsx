import React, { useState, useEffect } from 'react';
import Details from '../../utils/details';

interface Props {
  children: JSX.Element;
  pathname: string;
}

const PostLayout = ({ children, pathname }: Props): JSX.Element => {
  const [details, setDetails] = useState<Details>(new Details('', ''));
  useEffect(() => {
    import(`../../pages/${pathname}.mdx`)
      .then(mod => mod.details)
      .then(setDetails);
  }, []);
  const { title, author } = details;
  return (
    <>
      <div>Title: {title}</div>
      <div>Author: {author}</div>
      <div style={{ background: 'blue' }}>{children}</div>
    </>
  );
};

export default PostLayout;

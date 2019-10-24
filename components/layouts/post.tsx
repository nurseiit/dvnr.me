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
    <div>
      <div>Title: {title}</div>
      <div>Author: {author}</div>
      {children}
      <style>
        {`
          img {
            max-width: 100%;
          }
          `}
      </style>
    </div>
  );
};

export default PostLayout;

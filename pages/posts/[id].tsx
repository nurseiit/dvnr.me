import React from 'react';
import { NextPageContext } from 'next';

import { findPost } from '../../utils/posts';

type Props = {
  id?: string | string[];
  errors?: string;
};

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({
    query
  }: NextPageContext): Promise<Props> => {
    try {
      const { id } = query;
      return { id };
    } catch (err) {
      // todo 404
      return { errors: err.message };
    }
  };

  render(): JSX.Element {
    const { id, errors } = this.props;

    if (errors) {
      return (
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      );
    }
    const post = findPost(id as string);
    const Doc = post.doc;
    return <Doc />;
  }
}

export default InitialPropsDetail;

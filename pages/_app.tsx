import React from 'react';
import App from 'next/app';
import PostLayout from '../components/layouts/post';
import PageLayout from '../components/layouts/page';

interface MyComponent {
  isMDXComponent?: boolean;
}

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    const { isMDXComponent } = Component as MyComponent;
    if (isMDXComponent) {
      const { pathname } = this.props.router;
      return (
        <PostLayout pathname={pathname.slice(1)}>
          <Component {...pageProps} />
        </PostLayout>
      );
    }
    return (
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    );
  }
}

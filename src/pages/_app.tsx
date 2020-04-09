import React from 'react';
import NProgress from 'nprogress';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import GlobalStyle from '../utils/globalStyle';

import Layout from '../components/layout';
import Providers from '../components/providers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Router.events.on('routeChangeStart', (_) => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <Head>
          <title>devnur &mdash; inspirations by Nurseiit A.</title>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    );
  }
}

export default MyApp;

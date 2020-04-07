import React from 'react';
import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { MDXProvider } from '@mdx-js/react';
import GlobalStyle from '../utils/globalStyle';

import components from '../components/mdx';
import Layout from '../components/layout';
import darkMode from '../utils/theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Router.events.on('routeChangeStart', (_) => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp = ({ Component, pageProps }: AppProps): any => {
  const { value } = useDarkMode();
  return (
    <ThemeProvider theme={darkMode(value)}>
      <Head>
        <title>devnur &mdash; inspirations by Nurseiit A.</title>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <GlobalStyle />
      <Layout>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;

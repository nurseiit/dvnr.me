import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <Head>
          <title>Beta devnur</title>
        </Head>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;

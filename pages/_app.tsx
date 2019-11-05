import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <ColorModeProvider>
          <Head>
            <title>Beta devnur</title>
          </Head>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;

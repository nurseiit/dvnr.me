import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { MDXProvider } from '@mdx-js/react';

import components from './mdx';

import { lightTheme, darkTheme } from '../utils/theme';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default ({ children }) => {
  const { value } = useDarkMode();
  const theme = value ? darkTheme : lightTheme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </ThemeProvider>
  );

  // hack ssr for dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import { Sun, Moon } from '@styled-icons/feather';
import Link from 'next/link';

const Flex = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  align-items: center;
`;

const MainLink = styled.a`
  color: #319795;
  text-decoration: underline;
`;

const IconButton = styled.button`
  cursor: pointer;
  padding: 5px;
  border: none;
  background-color: transparent;
  transition: all 250ms;
  color: ${({ theme }): string => theme.heading};
`;

const Heading = styled.a`
  color: ${({ theme }): string => theme.heading};
`;

const Header = (): JSX.Element => {
  const darkMode = useDarkMode();
  const [colorMode, toggleColorMode] = [darkMode.value, darkMode.toggle];
  return (
    <Flex style={{ marginBottom: '-10px', marginTop: '20px' }}>
      <div>
        <Link href="/">
          <h1>
            <Heading href="/">
              <pre style={{ fontSize: '35px' }}>/dev/nur</pre>
            </Heading>
          </h1>
        </Link>

        <p
          style={{
            display: 'block',
            marginTop: '-1.5em',
            marginBottom: '1em',
          }}
        >
          inspirations by{' '}
          <Link href="/about">
            <MainLink href="/about">Nurseiit A.</MainLink>
          </Link>
        </p>
      </div>
      <IconButton aria-label="Toggle color mode" onClick={toggleColorMode}>
        <>{colorMode ? <Sun size="25px" /> : <Moon size="25px" />}</>
      </IconButton>
    </Flex>
  );
};

const Footer = (): JSX.Element => (
  <Flex>
    <div>
      <MainLink href="mailto:nurs@unist.ac.kr">mail</MainLink> &bull;{' '}
      <MainLink href="https://www.linkedin.com/in/nurseiit">linkedin</MainLink>{' '}
      &bull; <MainLink href="https://github.com/nurseiit">github</MainLink>
    </div>
    <div>
      <MainLink href="https://github.com/nurseiit/devnur.me">
        edit this page
      </MainLink>
    </div>
  </Flex>
);

interface Props {
  children: JSX.Element | string | null;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div style={{ margin: 'auto', maxWidth: '730px' }}>
    <div style={{ margin: 'auto 20px' }}>
      <Header />
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;

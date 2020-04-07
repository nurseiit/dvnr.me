import React from 'react';
import { useColorMode, DarkMode } from '@chakra-ui/core';
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
  font-weight: 400;
`;

const IconButton = styled.button`
  cursor: pointer;
  padding: 5px;
  border-radius: 0.25rem;
  transition: all 250ms;
`;

const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <div>
        <h1 style={{ fontWeight: 900, fontSize: '1.8em' }}>
          <Link href="/">
            <a href="/">devnur</a>
          </Link>
        </h1>
        <p style={{ fontWeight: 300, display: 'block' }}>
          inspirations by{' '}
          <Link href="/about">
            <MainLink href="/about">Nurseiit A.</MainLink>
          </Link>
        </p>
      </div>
      <DarkMode>
        <IconButton aria-label="Toggle color mode" onClick={toggleColorMode}>
          <>
            {colorMode === 'dark' ? (
              <Sun color="white" size="25px" />
            ) : (
              <Moon size="25px" />
            )}
          </>
        </IconButton>
      </DarkMode>
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
      <MainLink href="https://github.com/nurseiit/inspire">
        edit this page
      </MainLink>
    </div>
  </Flex>
);

interface Props {
  children: JSX.Element | string | null;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div style={{ margin: 'auto', maxWidth: '660px' }}>
    <div style={{ margin: 'auto 20px' }}>
      <Header />
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;

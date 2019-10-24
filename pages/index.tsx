import React from 'react';
import { NextPage } from 'next';
import { Box, Flex, Heading, Image } from '@chakra-ui/core';

const Index: NextPage = () => (
  <Box mx="auto" maxW="660px">
    <Heading size="lg" my="30px">
      devnur
    </Heading>
    <Flex align="center" justify="center" d="column">
      <Image src="/img/loading.gif" maxW="200px" mx="auto" />
      <Box textAlign="center">Coming soon...</Box>
    </Flex>
  </Box>
);

export default Index;

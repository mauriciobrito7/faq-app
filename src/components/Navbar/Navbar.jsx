import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './../ColorModeSwitcher';
import { Band, Header } from './Navbar.styles';

export const Navbar = ({ toggleColorFlag }) => {
  return (
    <>
      <Band />
      <Flex align="center" boxShadow="base" p="2" mb="2">
        <Box p="2">
          <Header
            fontWeight="black"
            size="lg"
            fontSize={{ base: '24px', md: '40px', lg: '56px' }}
          >
            E-commerce Support
          </Header>
        </Box>
        <Spacer />
        <Box>
          <ColorModeSwitcher toggleColorFlag={toggleColorFlag} />
        </Box>
      </Flex>
    </>
  );
};

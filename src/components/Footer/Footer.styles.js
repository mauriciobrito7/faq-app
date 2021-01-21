import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

export const ContainerFlex = styled(Flex)`
  width: 100%;
  height: 50px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: 'InterMedium';

  a {
    font-weight: bold;
    border-bottom: 2px solid #00ffcd;
  }
`;

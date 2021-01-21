import React from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import FAQ_LIST from '../utils/faq.json';

export const Faq = ({ index, setIndex, currentFaqId, setCurrentFaqId }) => {
  return (
    <Flex
      direction="column"
      p={4}
      style={{ fontFamily: 'InterMedium', fontWeight: 'normal' }}
    >
      <Box mb="8">
        <Heading size="md" fontSize={{ base: '18px', md: '32px', lg: '40px' }}>
          Frequently Asked Questions ⁉
        </Heading>
      </Box>
      <Accordion allowToggle index={index}>
        {FAQ_LIST.map(faq => (
          <AccordionItem key={faq.id} name={`accordion-button-${faq.id}`}>
            <AccordionButton
              onClick={() => {
                if (faq.id === currentFaqId) {
                  console.log('True');
                  setCurrentFaqId(null);
                  setIndex(null);
                } else {
                  setCurrentFaqId(faq.id);
                  setIndex(faq.id - 1);
                }
              }}
            >
              <Box flex="1" textAlign="left">
                <Text fontSize={{ base: '18px', md: '26px' }}>
                  {faq.question}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} fontSize={{ base: '16px', md: '24px' }}>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

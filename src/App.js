import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar/Navbar';
import { Faq } from './components/Faq';
import alanBtn from '@alan-ai/alan-sdk-web';
import { scroller } from 'react-scroll';

const App = () => {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  const [currentFaqId, setCurrentFaqId] = useState(null);
  const [toggleColorFlag, setToggleColorFlag] = useState(false);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          '02299655e90340d99c6fbdd8ce6c51fe2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: commandData => {
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordion-button-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
            });
            setIndex(commandData.faqId - 1);
            setCurrentFaqId(commandData.faqId);
          } else if (commandData.command === 'toggleColorMode') {
            setToggleColorFlag(flag => !flag);
          }
        },
      });
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar toggleColorFlag={toggleColorFlag} />
      <Faq
        index={index}
        setIndex={setIndex}
        currentFaqId={currentFaqId}
        setCurrentFaqId={setCurrentFaqId}
      />
    </ChakraProvider>
  );
};
export default App;

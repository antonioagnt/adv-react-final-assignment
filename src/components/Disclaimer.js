import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
  VStack,
  Heading,
  Center,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';

import MoreInfoCard from './MoreInfoCard';
import DisclaimerCard from './DisclaimerCard';

export default function Disclaimer() {
  const [isOpen, setIsOpen] = useState(true);
  const [moreInfo, seteMoreInfo] = useState(false);
  const onClose = () => setIsOpen(false);
  const handleMoreInfo = () => {
    seteMoreInfo(!moreInfo);
  };

  const MoreInfo = 'More Info';
  const LessInfo = 'Less Info';

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack justify='space-between'>
              <Heading size='lg'>Disclaimer</Heading>
              <VStack>
                <a
                  href='https://github.com/antonioagnt/adv-react-final-assigment'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Center>
                    <FontAwesomeIcon
                      icon={faSquareGithub}
                      size='2x'
                      color='#3186CE'
                    />
                  </Center>
                  <Heading size='sm'>Code There !</Heading>
                </a>
              </VStack>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {moreInfo ? <MoreInfoCard /> : <DisclaimerCard />}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={handleMoreInfo}>
              {moreInfo ? 'Less Info' : 'More Info'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

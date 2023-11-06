import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import MoreInfoCard from './MoreInfoCard';
import DisclaimerCard from './DisclaimerCard';

export default function Disclaimer() {
  const [isOpen, setIsOpen] = useState(true);
  const [moreInfo, seteMoreInfo] = useState(false);
  const onClose = () => setIsOpen(false);
  const handleMoreInfo = () => {
    seteMoreInfo(!moreInfo);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aviso</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {moreInfo ? <MoreInfoCard /> : <DisclaimerCard />}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={handleMoreInfo}>
              Saber mais
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

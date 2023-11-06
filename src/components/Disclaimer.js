import React from 'react';
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

export default function Disclaimer() {
  const isOpen = true;
  const onClose = () => {};
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aviso</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Esta pessoa não existe !</p>
            <p>
              Esta é um projeto educacional feito para a conclusão do curso
              Advanced React da Meta
            </p>
            <p>
              Se tiver interesse em saber mais sobre o que foi feito nesse
              projeto so clicar em mais informacões
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Saber mais</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

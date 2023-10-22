import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      background='white'
      color='black'
      borderRadius='xl'
      alignItems='start'
    >
      <Image src={imageSrc} alt={title} borderRadius='xl' />
      <VStack alignItems='start' p='15px'>
        <Heading size='md'>{title}</Heading>
        <Text>{description}</Text>
        <Text fontWeight='700'>
          See more <FontAwesomeIcon icon={faArrowRight} size='1x' />
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;

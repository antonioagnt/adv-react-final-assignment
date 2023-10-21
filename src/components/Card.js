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

// const Card = ({ title, description, imageSrc }) => {
//   return (
//     <VStack
//       spacing={4}
//       borderWidth="1px"
//       borderColor="gray.200"
//       p={4}
//       borderRadius="md"
//       alignItems="start"
//       boxShadow="md"
//       bg="white"
//       maxW="320px"
//     >
//       <Image src={imageSrc} alt={title} borderRadius="md" />

//       <VStack align="start" spacing={1}>
//         <Heading as="h2" size="lg">
//           {title}
//         </Heading>
//         <Text>{description}</Text>
//       </VStack>

//       <HStack justifyContent="space-between" w="100%">
//         <Text>Learn more</Text>
//         <FontAwesomeIcon icon={faArrowRight} size="1x" />
//       </HStack>
//     </VStack>
//   );
// };

// export default Card;

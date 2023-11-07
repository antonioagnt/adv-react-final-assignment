import { Box, Text, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function DisclaimerCard() {
  return (
    <Box>
      <HStack>
        <Heading size='md'>Pete is a fictional character</Heading>
      </HStack>

      <Text>
        This is an educational project from the Meta Advanced React Course. To
        learn more, click on 'More Info.'
      </Text>
    </Box>
  );
}

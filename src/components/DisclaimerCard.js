import { Box, Text, Heading } from '@chakra-ui/react';
import React from 'react';

export default function DisclaimerCard() {
  return (
    <Box>
      <Heading size='md'>Pete is a fictional character</Heading>
      <Text>
        This is an educational project from the Meta Advanced React Course. To
        learn more, click on 'More Info.'
      </Text>
    </Box>
  );
}

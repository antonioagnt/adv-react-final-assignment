import { Box, Text, Heading } from '@chakra-ui/react';
import React from 'react';

export default function DisclaimerCard() {
  return (
    <Box>
      <Heading size='md'>Pete é um personagem ficiticio</Heading>
      <Text>
        Este é um projeto educacional desenvolvido no curso Advanced React. Para
        ver o codigo e outras informações informações click em Saber mais.
      </Text>
    </Box>
  );
}

import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import metaBadge from '../images/meta-small.png';

export default function MoreInfoCard() {
  return (
    <Box>
      <Text>
        Hi ! i'm Antonio Neto(linkedin Icon), and i made this simple reactApp as
        part of the Advanced React course from the Meta Certificate Profisional
        course.
      </Text>
      <Text>
        To see in details what i done and what was already provived check the
        repository on linkedin if you want to see all badges i have on creedly
        click on the link bellown.
      </Text>
      <Image src={metaBadge} sizes='small' alt='meta-badge' borderRadius='xl' />
    </Box>
  );
}

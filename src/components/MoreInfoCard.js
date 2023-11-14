import React from 'react';
import { Box, Center, Image, Text, Divider } from '@chakra-ui/react';
import metaBadge from '../images/meta-small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function MoreInfoCard() {
  return (
    <Box>
      <Text>
        Hi! I'm{' '}
        <a
          href='https://www.credly.com/badges/144a1798-d70f-492c-bbef-bb0d2a22092b/public_url'
          target='_blank'
          rel='noopener noreferrer'
        >
          Antonio Neto,
        </a>{' '}
        and I've created this simple React app as part of the Meta Certificate
        Professional course.
        <Divider borderColor='black.600' variant='dashed' marginTop='2' />
      </Text>
      <Center>
        <a
          href='https://github.com/antonioagnt/adv-react-final-assignment'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            padding='10px'
            src={metaBadge}
            sizes='small'
            alt='meta-badge'
            borderRadius='xl'
          />
        </a>
      </Center>
      <Text>
        If you want to check this badge and my others on Creedly, click on the
        link above.
      </Text>
      <Divider borderColor='black.600' variant='dashed' marginTop='2' />

      <Text padding='2'>
        <a
          href='https://www.credly.com/users/antonio-albuquerque-guimaraes-neto'
          target='_blank'
          rel='noopener noreferrer'
        >
          To see what I've done and what was already provided, check the
          Repository on GitHub.
        </a>
      </Text>
    </Box>
  );
}

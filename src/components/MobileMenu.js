import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileMenu = ({ socials, handleClick }) => {
  return (
    <Box
      backgroundColor='#18181b'
      width='100%'
      padding='16px'
      position='absolute'
      top='60px'
      left={0}
      right={0}
      zIndex='10'
      boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)'
    >
      <HStack spacing={4} justifyContent='center'>
        {socials.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={social.icon} size='2x' />
          </a>
        ))}
      </HStack>
      <HStack spacing={8} justifyContent='center'>
        <a href='#projects' onClick={handleClick('projects')}>
          Projects
        </a>
        <a href='#contactme' onClick={handleClick('contactme')}>
          Contact Me
        </a>
      </HStack>
    </Box>
  );
};

export default MobileMenu;

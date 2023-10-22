import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
    id: 0,
  },
  {
    icon: faGithub,
    url: 'https://github.com',
    id: 1,
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
    id: 2,
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
    id: 3,
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
    id: 4,
  },
];

const Header = () => {
  const prevScrollY = useRef(0);
  const boxRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      boxRef.current.style.transform = 'translateY(-200px)';
    } else {
      boxRef.current.style.transform = 'translateY(0)';
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
      ref={boxRef}
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={social.icon} size='2x' />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='#projects' onClick={handleClick('projects')}>
                Projects
              </a>
              <a href='#contactme' onClick={handleClick('contactme')}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

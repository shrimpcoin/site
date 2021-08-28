import React from 'react';
import styled from 'styled-components';

import { Link } from 'components/atoms/Link';
import { Button } from 'components/atoms/Button';

type ContainerProps = {
  background: string;
};

const Container = styled.header<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 3;

  transition: all 0.2s ease;

  background: ${(props) => props.background};
`;

type HeaderProps = {
  scrollDist: number;
};

export const Header: React.FC<HeaderProps> = ({ scrollDist }): React.ReactElement => {
  const [scrollTrigger, setScrollTrigger] = React.useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= scrollDist) {
      setScrollTrigger(true);
    } else {
      setScrollTrigger(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container
      style={{ padding: scrollTrigger ? '0em' : '1em 0em', borderBottom: scrollTrigger ? '1px solid white' : '0px' }}
      background={scrollTrigger ? 'var(--color-primary)' : 'none'}
    >
      <nav>
        <Link
          color={scrollTrigger ? 'white' : 'black'}
          fadecolor={scrollTrigger ? 'black' : 'var(--color-primary)'}
          href="#"
        >
          Innovation
        </Link>
        <Link
          color={scrollTrigger ? 'white' : 'black'}
          fadecolor={scrollTrigger ? 'black' : 'var(--color-primary)'}
          href="#"
        >
          Developers
        </Link>
        <Link
          color={scrollTrigger ? 'white' : 'black'}
          fadecolor={scrollTrigger ? 'black' : 'var(--color-primary)'}
          href="#"
        >
          Community
        </Link>
        <Link
          color={scrollTrigger ? 'white' : 'black'}
          fadecolor={scrollTrigger ? 'black' : 'var(--color-primary)'}
          href="#"
        >
          FAQ
        </Link>
      </nav>
      {scrollTrigger && (
        <nav>
          <Button
            style={{ borderStyle: 'none none none solid' }}
            background={'var(--color-primary)'}
            outline={'white'}
            href="#"
          >
            Get Started
          </Button>
        </nav>
      )}
    </Container>
  );
};

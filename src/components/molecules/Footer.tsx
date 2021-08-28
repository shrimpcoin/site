import React from 'react';
import styled from 'styled-components';

import { Link } from 'components/atoms/Link';

const Container = styled.footer`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  z-index: 5;

  position: absolute;
  bottom: 0px;

  background: var(--color-primary);

  font-family: 'Manrope';
  font-weight: 200;
  font-size: 1em;
  color: white;
`;

export const Footer: React.FC = (): React.ReactElement => (
  <Container>
    <nav style={{ margin: '0px 1em 0px 1em' }}>
      <p>© 8oC 2021 Released under the MIT license</p>
    </nav>
    <nav style={{ margin: '0px 1em 0px 1em' }}>
      <Link color={'white'} fadecolor={'black'} href="/contact" style={{ fontSize: '1em' }}>
        Contact us
      </Link>
    </nav>
  </Container>
);

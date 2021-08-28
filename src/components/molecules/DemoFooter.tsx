import React from 'react';
import styled from 'styled-components';

import { ImCross } from 'react-icons/im';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 100;

  transition: all 0.2s ease;

  background: red;
`;

export const DemoFooter: React.FC = (): React.ReactElement => {
  const [closed, setClosed] = React.useState(false);

  return (
    <Container style={{ transform: closed ? 'scaleY(0)' : 'scaleY(1)' }}>
      <nav style={{ margin: '0px 1em 0px 1em' }}>
        <p style={{ color: 'white', fontFamily: 'Manrope' }}>
          <strong>You are browsing a development build of this site.</strong> Some features may be broken.
        </p>
      </nav>
      <nav style={{ margin: '0px 1em 0px 1em' }}>
        <a style={{ cursor: 'pointer' }} onClick={() => setClosed(true)}>
          <ImCross style={{ color: 'white' }} />
        </a>
      </nav>
    </Container>
  );
};

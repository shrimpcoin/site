import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Geometry } from 'assets/images/roundedtriangle.svg';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-light);
`;

const Content = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  height: 100%;
`;

const Text = styled.div`
  positon: absolute;
  padding: 1em;

  font-size: 1.5em;
  font-family: Manrope;
  font-weight: 300;
  color: black;
`;

export const Two: React.FC = (): React.ReactElement => (
  <Container>
    <Geometry style={{ position: 'absolute', left: '0px', height: '100%', width: '40%' }} preserveAspectRatio="none" />
    <Content>
      <Text style={{ fontWeight: 400 }}>Why shrimp?</Text>
      <Text style={{ width: '40%' }}>
        The cutting-edge Shrimpcoin protocol runs on the Ergo blockchain, using smart contracts to determine the price
        of shrimp on the fly.
      </Text>
    </Content>
  </Container>
);

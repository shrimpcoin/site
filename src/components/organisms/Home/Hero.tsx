import React from 'react';
import styled from 'styled-components';

import { Button } from 'components/atoms/Button';

import { ReactComponent as Shrimpcoin } from 'assets/images/shrimpcoin.svg';
import { ReactComponent as Wave } from 'assets/images/wave.svg';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
`;

const Text = styled.div`
  width: 20%;
  margin-left: 10%;
  font-size: 2.5em;
  font-family: Manrope;
  font-weight: 200;
`;

export const Hero: React.FC = (): React.ReactElement => (
  <Container>
    <Content>
      <Shrimpcoin />
      <Text>
        <p>It's time to get shrimp done.</p>
        <Button background="var(--color-primary)" outline="white" href="/wallet">
          Get Started
        </Button>
      </Text>
    </Content>
    <Wave style={{ position: 'absolute', bottom: '0%', width: '100%', height: '20%' }} preserveAspectRatio="none" />
  </Container>
);

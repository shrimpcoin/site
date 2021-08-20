import React from 'react';
import styled from 'styled-components';

import { Button } from 'components/atoms/Button';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-lightest);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const Text = styled.div`
  positon: absolute;
  padding: 0.5em;
  white-space: pre-wrap;

  font-size: 1.5em;
  font-family: Manrope;
  font-weight: 300;
  color: black;
`;

export const Three: React.FC = (): React.ReactElement => (
  <Container>
    <Content>
      <Text style={{ borderBottom: '1px solid black', fontWeight: 400 }}>You didn't answer my question.</Text>
      <Text style={{ width: '70%' }}>
        {
          'Shrimpcoin is backed by SCHIT (ShrimpCoin Hoard Index Token), which provides liquidity to Shrimpcoin HODLers.\n\nThe value of SCHIT goes up when ERG goes up, and down when ERG goes down, because more ERG is needed to cover the outstanding Shrimpcoin.\n\nSCHIT price also increases when people use the Shrimpcoin contract, as a portion of the transaction fees collected goes to the value of SCHIT.'
        }
      </Text>
      <Button background="var(--color-lightest)" outline="black" href="#">
        Learn More
      </Button>
    </Content>
  </Container>
);

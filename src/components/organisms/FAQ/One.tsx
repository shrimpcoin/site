import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Text = styled.div`
  positon: absolute;
  padding: 0.5em;

  font-size: 1.5em;
  font-family: Manrope;
  font-weight: 200;
  color: white;

  border-bottom: 1px solid white;
`;

export const One: React.FC = (): React.ReactElement => (
  <Container>
    <Content>
      <Text>
        What <strong>is</strong> Shrimpcoin?
      </Text>
      <Text style={{ padding: '1em', border: '2px solid white', width: '40%' }}>
        <strong>We're glad you asked.</strong> Shrimpcoin (SHMPC) is a revolutionary new stable cryptocurrency that is
        pinned to the value of exactly one shrimp.
      </Text>
    </Content>
  </Container>
);

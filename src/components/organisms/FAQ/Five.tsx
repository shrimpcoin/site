import React from 'react';
import styled from 'styled-components';

import { Button } from 'components/atoms/Button';
import { Link } from 'components/atoms/Link';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-dark);
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
  color: white;
`;

export const Five: React.FC = (): React.ReactElement => (
  <Container>
    <Content>
      <Text style={{ borderBottom: '1px solid white', fontWeight: 400 }}>How can I support this amazing project?</Text>
      <Text style={{ width: '70%' }}>
        Firstly, you can
        <Link color="white" fadecolor="black" href="#" style={{ padding: '0px', fontWeight: 500, fontSize: 'inherit' }}>
          {' Get Started '}
        </Link>
        and buy some Shrimpcoin for yourself. Just to see how good it feels in your wallet.{'\n\n'}You can also
        <Link color="white" fadecolor="black" href="#" style={{ padding: '0px', fontWeight: 500, fontSize: 'inherit' }}>
          {' donate to 8oC'}
        </Link>
        , the organization behind Shrimpcoin. We also make all sorts of other projects and art, which you’ll probably
        like if you’ve read this far.{'\n\n'}If you’re a developer, feel free to
        <Link color="white" fadecolor="black" href="#" style={{ padding: '0px', fontWeight: 500, fontSize: 'inherit' }}>
          {' join the Shrimpcoin Discord '}
        </Link>
        or start cracking issues on our
        <Link color="white" fadecolor="black" href="#" style={{ padding: '0px', fontWeight: 500, fontSize: 'inherit' }}>
          {' GitHub repo'}
        </Link>
        .
      </Text>
    </Content>
  </Container>
);

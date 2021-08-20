import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Geometry } from 'assets/images/faqsword.svg';

import { Button } from 'components/atoms/Button';

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
  z-index: 1;
  height: 100%;
  width: 100%;
`;

const Question = styled.div`
  position: absolute;
  padding: 1em;

  z-index: 2;

  font-size: 1.5em;
  font-family: Manrope;
  font-weight: 400;
  color: black;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;

  font-family: 'Manrope';
  font-size: 1.5em;
  font-weight: 300;
`;

export const Four: React.FC = (): React.ReactElement => (
  <Container>
    <Geometry style={{ position: 'absolute', left: '0%', width: '100%', margin: 'auto' }} />
    <Question style={{ top: '6.5%', left: '50%', transform: 'translateX(-50%)' }}>
      ...<strong>Fine.</strong> What makes Shrimpcoin a good stablecoin?
    </Question>
    <Content>
      <Answer style={{ width: '18%' }}>
        <p style={{ borderBottom: '1px solid black', fontWeight: 400 }}>Low Gas Prices</p>
        Thanks to the work of countless Ergonauts, gas prices - or transaction fees - are very low compared to other
        platforms. Many stablecoins reside on the Ethereum blockchain, which is notorious for its high gas prices.
        <Button background="var(--color-light)" outline="black" href="#" style={{ margin: '2em' }}>
          Learn More
        </Button>
      </Answer>
      <Answer style={{ width: '18%' }}>
        <p style={{ borderBottom: '1px solid black', fontWeight: 400 }}>Open Source</p>
        Unlike other popular stablecoins, Shrimpcoin is fully open-source; even the code for this website is hosted on
        our GitHub. This means that Shrimpcoin is constantly being improved by the people that actually use it.
        <Button background="var(--color-lightest)" outline="black" href="#" style={{ margin: '2em' }}>
          Learn More
        </Button>
      </Answer>
      <Answer style={{ width: '18%' }}>
        <p style={{ borderBottom: '1px solid black', fontWeight: 400 }}>Shrimp Technology</p>
        Our shrimp roots enable us to shrimp faster and harder than any other cryptocurrency on the market. By utilizing
        our shrimp techology, we can optimize our shellfish to a level only theorized by some.
        <Button background="var(--color-light)" outline="black" href="#" style={{ margin: '2em' }}>
          Learn More
        </Button>
      </Answer>
    </Content>
  </Container>
);

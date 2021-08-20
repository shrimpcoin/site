import React from 'react';
import styled from 'styled-components';

import { Header } from 'components/molecules/Header';
import { Hero } from 'components/organisms/Home/Hero';
import { One as FAQOne } from 'components/organisms/FAQ/One';
import { Two as FAQTwo } from 'components/organisms/FAQ/Two';
import { Three as FAQThree } from 'components/organisms/FAQ/Three';
import { Four as FAQFour } from 'components/organisms/FAQ/Four';
import { Five as FAQFive } from 'components/organisms/FAQ/Five';
import { Footer } from 'components/molecules/Footer';

const Container = styled.div`
  position: relative;
  height: 390vh;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-rows: 80vh 30vh 40vh 60vh 100vh 80vh;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;

export const Home: React.FC = (): React.ReactElement => (
  <Container>
    <Header scrollDist={300} />
    <FAQGrid>
      <Hero />
      <FAQOne />
      <FAQTwo />
      <FAQThree />
      <FAQFour />
      <FAQFive />
    </FAQGrid>
    <Footer />
  </Container>
);

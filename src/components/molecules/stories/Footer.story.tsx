import React from 'react';

import { Meta } from '@storybook/react';

import { Footer } from '../Footer';

export default {
  component: Footer,
  title: 'Components/Molecules/Footer',
} as Meta;

export const Simple: React.FC = () => <Footer />;

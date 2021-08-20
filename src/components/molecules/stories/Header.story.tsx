import React from 'react';

import { Meta } from '@storybook/react';

import { Header } from '../Header';

export default {
  component: Header,
  title: 'Components/Molecules/Header',
} as Meta;

export const Primary: React.FC = () => <Header scrollDist={300} />;

export const Secondary: React.FC = () => <Header scrollDist={0} />;

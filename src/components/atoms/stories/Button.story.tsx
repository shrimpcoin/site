import React from 'react';

import { Meta } from '@storybook/react';

import { Button } from '../Button';

export default {
  component: Button,
  title: 'Components/Atoms/Button',
} as Meta;

export const Primary: React.FC = () => (
  <Button background="var(--color-primary)" outline="white" href="#">
    Get Started
  </Button>
);

export const Ghost: React.FC = () => (
  <Button background="white" outline="black" href="#">
    Get Started
  </Button>
);

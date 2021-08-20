import React from 'react';

import { Meta } from '@storybook/react';

import { Link } from '../Link';

export default {
  component: Link,
  title: 'Components/Atoms/Link',
} as Meta;

export const Primary: React.FC = () => (
  <Link color="var(--color-primary)" fadecolor="black" href="#">
    Get Started
  </Link>
);

export const Secondary: React.FC = () => (
  <Link color="black" fadecolor="var(--color-primary)" href="#">
    Get Started
  </Link>
);

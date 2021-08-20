import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';

test('Button', () => {
  const component = renderer.create(<Button href="#">Button</Button>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import { Hero } from 'components/organisms/Home/Hero';

test('Hero', () => {
  const component = renderer.create(<Hero />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from '../Footer';

test('Footer', () => {
  const component = renderer.create(<Footer />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

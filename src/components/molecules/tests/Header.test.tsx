import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../Header';

test('Header Primary', () => {
  const component = renderer.create(<Header scrollDist={300} />);
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Header Secondary', () => {
  const component = renderer.create(<Header scrollDist={0} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

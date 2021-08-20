import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from 'components/templates/Home';

test('Home', () => {
  const component = renderer.create(<Home />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

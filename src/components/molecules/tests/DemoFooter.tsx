import React from 'react';
import renderer from 'react-test-renderer';
import { DemoFooter } from '../DemoFooter';

test('DemoFooter', () => {
  const component = renderer.create(<DemoFooter />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from '../Link';

test('Link', () => {
  const component = renderer.create(<Link href="#">Link</Link>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

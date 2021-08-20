import React from 'react';
import renderer from 'react-test-renderer';
import { One } from 'components/organisms/FAQ/One';
import { Two } from 'components/organisms/FAQ/Two';
import { Three } from 'components/organisms/FAQ/Three';
import { Four } from 'components/organisms/FAQ/Four';
import { Five } from 'components/organisms/FAQ/Five';

test('One', () => {
  const component = renderer.create(<One />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Two', () => {
  const component = renderer.create(<Two />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Three', () => {
  const component = renderer.create(<Three />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Four', () => {
  const component = renderer.create(<Four />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Five', () => {
  const component = renderer.create(<Five />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

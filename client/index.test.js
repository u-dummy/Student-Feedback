import React from 'react';
import Enzyme, {shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import App from './src/index.jsx';

Enzyme.configure({ adapter: new Adapter() })

const sum = (a, b) => {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

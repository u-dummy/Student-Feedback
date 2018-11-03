import React from 'react';
import Enzyme, {shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../src/App.jsx';
import sampleData from './sampleData.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Review component tests', () => {
  let wrapper;
  let props;

  // need to simulate this :(
  const fetch = () => {
    return sampleData;
  }

  beforeEach(() => {
    props = 1;
    wrapper = mount(<App courseId={props} />);
  });

  it('renders the component', () => {
    const AppTest = renderer.create(wrapper).toJSON();
    expect(AppTest).toMatchSnapshot();
  });
});

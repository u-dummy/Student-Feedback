import React from 'react';
import Enzyme, {shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Search from '../src/components/Search.jsx';


Enzyme.configure({ adapter: new Adapter() })

describe('Review component tests', () => {
  let wrapper;

  beforeEach(() => {
    const props1 = () => {};
    let props2 = 3

    wrapper = shallow(<Search currentFilter={props2} searchFilter={props1} />);
  });

  it('search component renders', () => {
    const SearchTest = renderer.create(wrapper).toJSON();
    expect(SearchTest).toMatchSnapshot();
  });

  // this belongs in main app tests
  it('filters reviews on keyword search', () => {
    wrapper.find('input').simulate('change', { target: { value: 'new value' } });
  });
});

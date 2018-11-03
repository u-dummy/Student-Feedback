import React from 'react';
import Enzyme, {shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Search from './src/components/Search.jsx';
import Review from './src/components/Review.jsx';


Enzyme.configure({ adapter: new Adapter() })

it('search component renders', () => {
  const sampleProps = {
    searchFilter: () => {},
    currentFilter: 3,
  };

  const SearchTest = renderer.create(<Search props={sampleProps} />).toJSON();
  expect(SearchTest).toMatchSnapshot();
});

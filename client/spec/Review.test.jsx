import React from 'react';
import Enzyme, {shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Review from '../src/components/Review.jsx';
import set from '../src/helperFunctions.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Review component tests', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      user: {
        userPic: 'https://picsum.photos/200/300/?random',
        userName: 'Tarik',
      },
      date: new Date(),
      review: 'something',
      rating: '5',
    };

    wrapper = shallow(<Review reviewData={props} />);
  });

  it('renders the component', () => {
    const ReviewTest = renderer.create(<Review reviewData={props}/>);
    const tree = ReviewTest.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays review text', () => {
    expect(wrapper.find('.reviewText').text()).toBe('something');
  });

  it('renders a user avatar if an image is provided', () => {
    expect(wrapper.find('img')).toBeDefined();
  });

  it('renders a user initials if an image is not provided', () => {
    props = {
      user: {
        userPic: 'TB',
        userName: 'Tarik',
      },
      date: new Date(),
      review: 'something',
      rating: '5',
    };

    wrapper = shallow(<Review reviewData={props} />);
    expect(wrapper.find('.reviewUserInitials')).toBeDefined();
  });

  it('renders the timestamp in relative time', () => {
    expect(wrapper.find('.reviewDate').text()).toContain('ago');
  });
});
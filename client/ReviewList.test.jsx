import React from 'react';
import Enzyme, {shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Review from './src/components/Review.jsx';
import ReviewList from './src/components/ReviewList.jsx';
import set from './src/helperFunctions.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Review component tests', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    const props1 = 10;
    const props2 = () => (props1 + 10);
    const props3 = [
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
    ];

    wrapper = mount(<ReviewList numOfReviewsToShow={props1} addTen={props2} filteredReviews={props3}/>);
  });

  it('renders the component', () => {
    const ReviewListTest = renderer.create(wrapper).toJSON();
    expect(ReviewListTest).toMatchSnapshot();
  });

  it('displays seeMoreButton when there is more than 10 reviews', () => {
    expect(wrapper.find('.seeMoreButton')).toBeDefined();
  });

  it('does not display seeMoreButton when there is less than 10 reviews', () => {
    let props1 = 10;
    const props2 = () => {
      props1 += 10;
    };
    const props3 = [
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
    ];

    wrapper = mount(<ReviewList numOfReviewsToShow={props1} addTen={props2} filteredReviews={props3}/>);
    expect(wrapper.exists('.seeMoreButton')).toEqual(false);
  });

  it('only renders up to the numbers of reviews that is passed in as a limit', () => {
    expect(wrapper.find('.reviewsContainer').children().length).toBe(10);

    let props1 = 20;
    const props2 = () => {
      props1 += 10;
    };
    const props3 = [
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
      {
        user: {
          userPic: 'TB',
          userName: 'Tarik',
        },
        date: new Date(),
        review: 'something',
        rating: '5',
      },
    ];

    wrapper = mount(<ReviewList numOfReviewsToShow={props1} addTen={props2} filteredReviews={props3}/>);
    expect(wrapper.find('.reviewsContainer').children().length).toBe(12);
  });


  it('displays a message if no reviews were found', () => {
    let props1 = 20;
    const props2 = () => {
      props1 += 10;
    };
    const props3 = [];
    wrapper = mount(<ReviewList numOfReviewsToShow={props1} addTen={props2} filteredReviews={props3}/>);
    expect(wrapper.find('p')).toBeDefined();
  });
});

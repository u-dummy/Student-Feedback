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

describe('Review component tests', () => {
  const reviewData = {
    user: {
      userPic: 'https://picsum.photos/200/300/?random',
      userName: 'Tarik',
    },
    date: new Date(),
    review: 'something',
    rating: '5',
  };

  it('renders', () => {

    const ReviewSnap = renderer.create(<Review props={reviewData} />).toJSON();
    expect(ReviewSnap).toMatchSnapshot();
  });
});

// const Review = props => (
//   <div className='individualReviewContainer'>
//     <div className='reviewUserInfo'>
//       <span>{set.userPic(props.reviewData.user.userPic)}</span>
//       <span className='reviewInfo'>
//         <div className='reviewDate'>{moment(props.reviewData.date).fromNow()}</div>
//         <div>{props.reviewData.user.username}</div>
//       </span>
//     </div>
//     <div className='reviewRatingAndText'>
//       <div><img className='reviewStars' src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${props.reviewData.rating}+stars+white.png`}></img></div>
//       <div>{set.reviewText(props.reviewData.review)}</div>
//     </div>
//   </div>
// );

// export default Review;
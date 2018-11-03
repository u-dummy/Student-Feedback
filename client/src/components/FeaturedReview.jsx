import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import set from '../helperFunctions.jsx';

const FeaturedReview = (props) => {
  if (props.featuredReview) {
    return (
      <div>
        <h2>Featured review</h2>
        <div className='featuredReviewContainer'>
          <div className='featuredReviewTopRow'>
            <div className='featureReviewUserPic'>{set.userPic(props.featuredReview.user.userPic)}</div>
            <div className='featuredReviewInfo'>
              <span className='featuredReviewUsername'>{props.featuredReview.user.username}</span>
              <span className='featuredReviewCounts'>( {props.featuredReview.user.courseCount} courses, {props.featuredReview.user.reviewCount} reviews )</span>
              <div>
                <img className='reviewStars' src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${props.featuredReview.rating}+stars+white.png`}></img>
              </div>
              <div>{moment(props.featuredReview.date).fromNow()}</div>
            </div>
          </div>
          <div className='reviewText'>{props.featuredReview.review}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Featured review</h2>
      <p><i>There are no featured reviews for this course yet...</i></p>
    </div>
  );
};

FeaturedReview.propTypes = {
  featuredReview: PropTypes.shape({
    user: PropTypes.shape({
      userPic: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      courseCount: PropTypes.number.isRequired,
      reviewCount: PropTypes.number.isRequired,
    }),
    date: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default FeaturedReview;

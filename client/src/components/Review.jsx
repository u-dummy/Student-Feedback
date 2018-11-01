import React from 'react';
import moment from 'moment';
import set from '../helperFunctions.jsx';

const Review = props => (
  <div className='individualReviewContainer'>
    <div className='reviewUserInfo'>
      <span>{set.userPic(props.reviewData.user.userPic)}</span>
      <span className='reviewInfo'>
        <div className='reviewDate'>{moment(props.reviewData.date).fromNow()}</div>
        <div>{props.reviewData.user.username}</div>
      </span>
    </div>
    <div className='reviewRatingAndText'>
      <div><img className='reviewStars' src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${props.reviewData.rating}+stars+white.png`}></img></div>
      <div>{set.reviewText(props.reviewData.review)}</div>
    </div>
  </div>
);

export default Review;

import React from 'react';
import moment from 'moment';
import set from '../helperFunctions.jsx';

class Review extends React.Component {

  render() {
    return (
      <div className='individualReviewContainer'>
        <div className='reviewUserInfo'>
          <span>{set.userPic(this.props.reviewData.user.userPic)}</span>
          <span className='reviewInfo'>
            <div className='reviewDate'>{moment(this.props.reviewData.date).fromNow()}</div>
            <div>{this.props.reviewData.user.username}</div>
          </span>
        </div>
        <div className='reviewRatingAndText'>
          <div><img className='reviewStars' src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${this.props.reviewData.rating}+stars+white.png`}></img></div>
          <div>{set.reviewText(this.props.reviewData.review)}</div>
        </div>
      </div>
    );
  }
}

export default Review;

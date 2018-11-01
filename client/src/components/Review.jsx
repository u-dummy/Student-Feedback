import React from 'react';
import moment from 'moment';

class Review extends React.Component {
  renderReviewText() {
    if (this.props.reviewData.boldedReview) {
      return (
        <div>
          {this.props.reviewData.boldedReview.preQuery}
          {this.props.reviewData.boldedReview.query}
          {this.props.reviewData.boldedReview.postQuery}
        </div>
      );
    }
    return (
      <div>
        {this.props.reviewData.review}
      </div>
    );
  }

  render() {

    let userPic;
    if (this.props.reviewData) {
      if (this.props.reviewData.user.userPic.length > 2) {
        userPic = <img className='reviewUserPic' src={this.props.reviewData.user.userPic}></img>;
      } else {
        userPic = <div className='reviewUserInitials' >{this.props.reviewData.user.userPic}</div>;
      }
    }

    return (
      <div className='individualReviewContainer'>
        <div className='reviewUserInfo'>
          <span>{userPic}</span>
          <span className='reviewInfo'>
            <div className='reviewDate'>{moment(this.props.reviewData.date).fromNow()}</div>
            <div>{this.props.reviewData.user.username}</div>
          </span>
        </div>
        <div className='reviewRatingAndText'>
          <div><img className='reviewStars' src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${this.props.reviewData.rating}+stars+white.png`}></img></div>
          <div>{this.renderReviewText()}</div>
        </div>
      </div>
    );
  }
}

export default Review;

// return (
//   <div>
//     <h2>Featured review</h2>
//     <div className='featuredReviewContainer'>
//       <div className='featuredReviewTopRow'>
//         <div className='featureReviewUserPic'>{userPic}</div>
//         <div className='featuredReviewInfo'>
//           <span className='featuredReviewUsername'>{this.props.featuredReview.user.username}</span>
//           <span className='featuredReviewCounts'>( {this.props.featuredReview.user.courseCount} courses, {this.props.featuredReview.user.reviewCount} reviews )</span>
//           <div>Rating: {this.props.featuredReview.rating}</div>
//           <div>{moment(this.props.featuredReview.date).fromNow()}</div>
//         </div>
//       </div>
//       <div className='reviewText'>{this.props.featuredReview.review}</div>
//     </div>
//   </div>
// );
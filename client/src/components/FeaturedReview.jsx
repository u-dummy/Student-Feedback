import React from 'react';
import moment from 'moment';

class FeaturedReview extends React.Component {
  render() {
    let userPic;
    if (this.props.featuredReview) {
      if (this.props.featuredReview.user.userPic.length > 2) {
        userPic = <img className='reviewUserPic'src={this.props.featuredReview.user.userPic}></img>;
      } else {
        userPic = <div className='reviewUserInitials'>{this.props.featuredReview.user.userPic}</div>;
      }

      return (
        <div>
          <h2>Featured review</h2>
          <div className='featuredReviewContainer'>
            <div className='featuredReviewTopRow'>
              <div className='featureReviewUserPic'>{userPic}</div>
              <div className='featuredReviewInfo'>
                <span className='featuredReviewUsername'>{this.props.featuredReview.user.username}</span>
                <span className='featuredReviewCounts'>( {this.props.featuredReview.user.courseCount} courses, {this.props.featuredReview.user.reviewCount} reviews )</span>
                <div>Rating: {this.props.featuredReview.rating}</div>
                <div>{moment(this.props.featuredReview.date).fromNow()}</div>
              </div>
            </div>
            <div className='reviewText'>{this.props.featuredReview.review}</div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default FeaturedReview;

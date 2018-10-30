import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

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
    return (
      <div>
        <div>Username: {this.props.reviewData.user.username}</div>
        <div>Picture: {this.props.reviewData.user.userPic}</div>
        <div>Rating: {this.props.reviewData.rating}</div>
        <div>Review: {this.renderReviewText()}</div>
        <div>Date: {this.props.reviewData.date}</div>
        <div>Upvotes: {this.props.reviewData.upvotes}</div>
        <div>Downvotes: {this.props.reviewData.downvotes}</div>
      </div>
    );
  }
}

export default Review;

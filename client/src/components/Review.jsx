import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Username: {this.props.reviewData.user.username}</div>
        <div>Picture: {this.props.reviewData.user.userPic}</div>
        <div>Rating: {this.props.reviewData.rating}</div>
        <div>Review: {this.props.reviewData.review}</div>
        <div>Date: {this.props.reviewData.date}</div>
        <div>Upvotes: {this.props.reviewData.upvotes}</div>
        <div>Downvotes: {this.props.reviewData.downvotes}</div>
      </div>
    );
  }
}

export default Review;

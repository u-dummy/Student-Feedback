import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Username: {this.props.featuredReview.user.username}</div>
        <div>Picture: {this.props.featuredReview.user.userPic}</div>
        <div>Rating: {this.props.featuredReview.rating}</div>
        <div>Review: {this.props.featuredReview.review}</div>
        <div>Date: {this.props.featuredReview.date}</div>
        <div>Upvotes: {this.props.featuredReview.upvotes}</div>
        <div>Downvotes: {this.props.featuredReview.downvotes}</div>
      </div>
    );
  }
}

export default Review;


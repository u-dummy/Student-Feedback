import React from 'react';

class FeaturedReview extends React.Component {
  render() {
    if (this.props.featuredReview) {
      return (
        <div>
          <div>Username: {this.props.featuredReview.user.username}</div>
          <div>Picture: {this.props.featuredReview.user.userPic}</div>
          <div>Courses Taken: {this.props.featuredReview.user.courseCount}</div>
          <div>Reviews Given: {this.props.featuredReview.user.reviewCount}</div>
          <div>Rating: {this.props.featuredReview.rating}</div>
          <div>Review: {this.props.featuredReview.review}</div>
          <div>Date: {this.props.featuredReview.date}</div>
          <div>Upvotes: {this.props.featuredReview.upvotes}</div>
          <div>Downvotes: {this.props.featuredReview.downvotes}</div>
        </div>
      );
    }
    return null;
  }
}

export default FeaturedReview;

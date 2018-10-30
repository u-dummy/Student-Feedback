import React from 'react';
import Review from './Review.jsx';

class ReviewList extends React.Component {
  render() {
    const reviews = this.props.reviews.map(review => (
      <div>
        <Review reviewData={ review } />
      </div>
    ));

    return (
      <div>
        {reviews}
      </div>
    );
  }
}

export default ReviewList;

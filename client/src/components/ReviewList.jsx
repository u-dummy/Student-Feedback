import React from 'react';
import Review from './Review.jsx';

class ReviewList extends React.Component {
  seeMore() {
    if (this.props.visibleReviews.length === this.props.countOfReviews) {
      return null;
    }
    return <button onClick={() => (this.props.addTen())}>See more</button>;
  }

  render() {
    const reviews = this.props.visibleReviews.map(review => (
      <div>
        <Review reviewData={ review } />
      </div>
    ));

    return (
      <div>
        {reviews}
        {this.seeMore()}
      </div>
    );
  }
}

export default ReviewList;

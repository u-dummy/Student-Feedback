import React from 'react';
import Review from './Review.jsx';

class ReviewList extends React.Component {
  render() {
    const reviews = this.props.filteredReviews.slice(0, this.props.numOfReviewsToShow).map(review => (
      <div>
        <Review reviewData={ review } />
      </div>
    ));

    const seeMoreButton = () => {
      if (this.props.filteredReviews.length <= this.props.numOfReviewsToShow) {
        return null;
      }
      return <button onClick={() => (this.props.addTen())}>See more</button>;
    };

    return (
      <div>
        {reviews}
        {seeMoreButton()}
      </div>
    );
  }
}

export default ReviewList;

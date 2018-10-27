import React from 'react';

import Review from './Review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviews = this.props.reviews.map((review) => {
      console.log(review);
      return (
        <div>
          <Review style='border:1px solid black' featuredReview={ review } />
        </div>
      )
    });

    return (
      <div>
        {reviews}
      </div>
    );
  }
}

export default ReviewList;
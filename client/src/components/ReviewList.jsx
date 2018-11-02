import React from 'react';

import Review from './Review.jsx';

class ReviewList extends React.Component {
  showVisibleReviews() {
    const visibleReviews = this.props.filteredReviews.slice(0, this.props.numOfReviewsToShow);
    const visibleReviewsDivs = visibleReviews.map(review => (
      <div>
        <Review reviewData={ review } />
      </div>
    ));

    return visibleReviewsDivs;
  }

  showSeeMoreButton() {
    if (this.props.filteredReviews.length <= this.props.numOfReviewsToShow) {
      return null;
    }
    return <button className='seeMoreButton' onClick={() => (this.props.addTen())}>See more reviews</button>;
  }

  render() {
    const reviews = this.showVisibleReviews();
    if (reviews.length) {
      return (
        <div>
          <div className='reviewsContainer'>
              {reviews}
          </div>
          <div className='seeMoreButtonHolder'>
              {this.showSeeMoreButton()}
          </div>
        </div>
      );
    }

    return <p>No reviews matched your search. Try searching with another term.</p>;
  }
}

export default ReviewList;

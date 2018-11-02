import React from 'react';

import Review from './Review.jsx';
import Search from './Search.jsx';

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
    return (
      <div>
        <div className='reviewsContainerHeaderAndSearch'>
          <span className='reviewsHeader'>Reviews</span>
          <Search searchFilter={this.props.searchFilter}
            currentlyFiltered={this.props.currentlyFiltered}
          />
        </div>
        <div className='reviewsContainer'>
          {this.showVisibleReviews()}
        </div>
        <div className='seeMoreButtonHolder'>
          {this.showSeeMoreButton()}
        </div>
      </div>
    );
  }
}

export default ReviewList;

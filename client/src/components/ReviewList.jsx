import React from 'react';
import Review from './Review.jsx';
import Search from './Search.jsx';

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
      <div className='reviewsContainer'>
        <div className='reviewContainerHeaderAndSearch'>
          <span className='reviewsHeader'>Reviews</span>
          <Search searchFilter={this.props.searchFilter}/>
        </div>
        <div>
          {reviews}
          {seeMoreButton()}
        </div>
      </div>
    );
  }
}

export default ReviewList;

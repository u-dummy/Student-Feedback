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
      return <button className='seeMoreButton' onClick={() => (this.props.addTen())}>See more reviews</button>;
    };

    return (
      <div>
        <div className='reviewsContainerHeaderAndSearch'>
          <span className='reviewsHeader'>Reviews</span>
          <Search searchFilter={this.props.searchFilter}/>
        </div>
        <div className='reviewsContainer'>
          {reviews}
        </div>
        <div className='seeMoreButtonHolder'>
          {seeMoreButton()}
        </div>
      </div>
    );
  }
}

export default ReviewList;

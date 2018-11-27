import React from 'react';
// import PropTypes from 'prop-types';
import Review from './Review.jsx';
import styles from '../styles/ReviewList.css';

class ReviewList extends React.Component {
  showVisibleReviews() {
    const visibleReviews = this.props.filteredReviews.slice(0, this.props.numOfReviewsToShow);
    const visibleReviewsDivs = visibleReviews.map(review => (
      <div key={review.user_id}>
        <Review reviewData={ review } />
      </div>
    ));

    return visibleReviewsDivs;
  }

  showSeeMoreButton() {
    if (this.props.filteredReviews.length <= this.props.numOfReviewsToShow) {
      return null;
    }
    return <button className={styles.seeMoreButton}
      onClick={() => (this.props.addTen())}>See more reviews</button>;
  }

  render() {
    const reviews = this.showVisibleReviews();
    if (reviews.length) {
      return (
        <div>
          <div className={styles.reviewsContainer}>
              {reviews}
          </div>
          <div className={styles.seeMoreButtonHolder}>
              {this.showSeeMoreButton()}
          </div>
        </div>
      );
    }

    return <p>No reviews matched your search. Try searching with another term.</p>;
  }
}

// need to fix propTypes for review
// ReviewList.propTypes = {
//   filteredReviews: PropTypes.arrayOf(PropTypes.shape({
//     user: PropTypes.shape({
//       user_pic: PropTypes.string.isRequired,
//       username: PropTypes.string.isRequired,
//       courseCount: PropTypes.number.isRequired,
//       reviewCount: PropTypes.number.isRequired,
//     }),
//     date: PropTypes.string.isRequired,
//     review: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.arrayOf(PropTypes.oneOfType(
//       [PropTypes.string.isRequired, PropTypes.object.isRequired],
//     ))]),
//     rating: PropTypes.number.isRequired,
//   })),
//   numOfReviewsToShow: PropTypes.number.isRequired,
//   addTen: PropTypes.func.isRequired,
// };

export default ReviewList;

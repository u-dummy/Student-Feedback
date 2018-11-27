import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReviewStars from './ReviewStars.jsx';
import styles from '../styles/Review.css';

class Review extends React.Component {
  setReviewText() {
    const { review } = this.props.reviewData;
    if (review.length) {
      return (
        <div>
          {review}
        </div>
      );
    }
    return (
      <div>
        {review}
      </div>
    );
  }

  setUserPic() {
    const { user_pic } = this.props.reviewData;
    if (user_pic.includes('https')) {
      return <img className={styles.reviewUserPic} src={user_pic}></img>;
    }
    return <div className={styles.reviewUserInitials}>{user_pic}</div>;
  }

  render() {
    return (
      <div className={styles.individualReviewContainer}>
        <div className={styles.reviewUserInfo}>
          {this.setUserPic()}
          <span className={styles.reviewInfo}>
            <div className={styles.reviewDate}>{moment(this.props.reviewData.created_at).fromNow()}</div>
            <div>{this.props.reviewData.username}</div>
          </span>
        </div>
        <div className={styles.reviewRatingAndText}>
          <div className={styles.reviewStars}>
            <ReviewStars starStyle={{ fontSize: '15px', margin: '0 2px 0 0' }} rating={Number(this.props.reviewData.rating)} />
          </div>
          {this.setReviewText()}
        </div>
      </div>
    );
  }
}

// need to fix propTypes for review
// Review.propTypes = {
//   reviewData: PropTypes.shape({
//     user: PropTypes.shape({
//       user_pic: PropTypes.string.isRequired,
//       username: PropTypes.string.isRequired,
//     }),
//     date: PropTypes.string.isRequired,
//     review: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.arrayOf(PropTypes.oneOfType(
//       [PropTypes.string.isRequired, PropTypes.object.isRequired],
//     ))]),
//     rating: PropTypes.number.isRequired,
//   }),
// };

export default Review;

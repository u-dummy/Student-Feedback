import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from '../styles/Review.css';

class Review extends React.Component {
  setReviewText() {
    const { review } = this.props.reviewData;
    if (typeof review === 'object') {
      return (
        <div>
          {review.preQuery}
          {review.query}
          {review.postQuery}
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
    const { userPic } = this.props.reviewData.user;
    if (userPic.includes('https')) {
      return <img className={styles.reviewUserPic} src={userPic}></img>;
    }
    return <div className={styles.reviewUserInitials}>{userPic}</div>;
  }

  render() {
    return (
      <div className={styles.individualReviewContainer}>
        <div className={styles.reviewUserInfo}>
          {this.setUserPic()}
          <span className={styles.reviewInfo}>
            <div className={styles.reviewDate}>{moment(this.props.reviewData.date).fromNow()}</div>
            <div>{this.props.reviewData.user.username}</div>
          </span>
        </div>
        <div className={styles.reviewRatingAndText}>
          <div><img className={styles.reviewStars} src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${this.props.reviewData.rating}+stars+white.png`}></img></div>
          {this.setReviewText()}
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  reviewData: PropTypes.shape({
    user: PropTypes.shape({
      userPic: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    review: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
    rating: PropTypes.number.isRequired,
  }),
};

export default Review;

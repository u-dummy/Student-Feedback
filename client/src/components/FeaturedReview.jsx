import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from '../styles/FeaturedReview.css';

import set from '../helperFunctions.jsx';

class FeaturedReview extends React.Component {
  setUserPic() {
    const { userPic } = this.props.featuredReview.user;
    if (userPic.includes('https')) {
      return <img className={styles.reviewUserPic} src={userPic}></img>;
    }
    return <div className={styles.reviewUserInitials}>{userPic}</div>;
  }

  render() {
    if (this.props.featuredReview) {
      return (
        <div>
          <h2>Featured review</h2>
          <div className={styles.featuredReviewContainer}>
            <div className={styles.featuredReviewTopRow}>
              <div className={styles.featureReviewUserPic}>{this.setUserPic()}</div>
              <div className={styles.featuredReviewInfo}>
                <span className={styles.featuredReviewUsername}>{this.props.featuredReview.user.username}</span>
                <span>( {this.props.featuredReview.user.courseCount} courses, {this.props.featuredReview.user.reviewCount} reviews )</span>
                <div>
                  <img className={styles.featuredReviewStars} src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${this.props.featuredReview.rating}+stars+white.png`}></img>
                </div>
                <div>{moment(this.props.featuredReview.date).fromNow()}</div>
              </div>
            </div>
            <div>{this.props.featuredReview.review}</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2>Featured review</h2>
        <p><i>There are no featured reviews for this course yet...</i></p>
      </div>
    );
  }
};

FeaturedReview.propTypes = {
  featuredReview: PropTypes.shape({
    user: PropTypes.shape({
      userPic: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      courseCount: PropTypes.number.isRequired,
      reviewCount: PropTypes.number.isRequired,
    }),
    date: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default FeaturedReview;

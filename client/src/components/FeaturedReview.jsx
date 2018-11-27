import React from 'react';
import moment from 'moment';
// import PropTypes from 'prop-types';
import ReviewStars from './ReviewStars.jsx';
import styles from '../styles/FeaturedReview.css';

class FeaturedReview extends React.Component {
  setUserPic() {
    const { user_pic } = this.props.featuredReview;
    if (user_pic.includes('https')) {
      return <img className={styles.reviewUserPic} src={user_pic}></img>;
    }
    return <div className={styles.reviewUserInitials}>{user_pic}</div>;
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
                <span className={styles.featuredReviewUsername}>
                  {this.props.featuredReview.username}
                </span>
                <span>( {this.props.featuredReview.course_count} courses,</span>
                <span> {this.props.featuredReview.review_count} reviews )</span>
                <ReviewStars starStyle={{ fontSize: '13px', margin: '2px' }} rating={this.props.featuredReview.rating} />
                <div>{moment(this.props.featuredReview.created_at).fromNow()}</div>
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
}

// FeaturedReview.propTypes = {
//   featuredReview: PropTypes.shape({
//     user: PropTypes.shape({
//       user_pic: PropTypes.string.isRequired,
//       username: PropTypes.string.isRequired,
//       courseCount: PropTypes.number.isRequired,
//       reviewCount: PropTypes.number.isRequired,
//     }),
//     date: PropTypes.string.isRequired,
//     review: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//   }),
// };

export default FeaturedReview;

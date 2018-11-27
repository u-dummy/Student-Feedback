import React from 'react';
import axios from 'axios';
import FeaturedReview from './FeaturedReview.jsx';
import ReviewList from './ReviewList.jsx';
import CourseSummary from './StudentFeedback.jsx';
import Search from './Search.jsx';
import styles from '../styles/App.css';
import filterAndBold from '../filterAndBold.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseStats: {},
      featuredReview: {},
      reviews: [],
      queryTerm: '',
      reviewsFilteredBySearch: [],
      reviewsFilteredByRating: [],
      currentFilterRating: null,
      numOfReviewsToShow: 5,
    };

    this.filterAndBoldOnSearch = this.filterAndBoldOnSearch.bind(this);
    this.filterOnRatingClick = this.filterOnRatingClick.bind(this);
    this.addTenReviews = this.addTenReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get(`${window.location.pathname.slice('/courses'.length)}reviews`)

      //.then(rawData => (rawData.text()))
      .then((responseData) => {
        console.log(responseData.data);
        this.setState(responseData.data);
        this.setState({
          reviewsFilteredBySearch: this.state.reviews,
          reviewsFilteredByRating: this.state.reviews,
        });
      })
      .catch((err) => {
        throw Error(err);
      });
  }

  addReviews(review) {
    axios.post('/courses', review)
      .then(this.getReviews);
  }


  addTenReviews() {
    this.setState({ numOfReviewsToShow: this.state.numOfReviewsToShow + 10 });
  }

  filterAndBoldOnSearch(query) {
    let reviewsFilteredBySearch;
    this.setState({ queryTerm: query });
    if (query !== '') {
      reviewsFilteredBySearch = filterAndBold(this.state.reviews, query);
    } else {
      reviewsFilteredBySearch = this.state.reviews;
    }
    this.setState({ reviewsFilteredBySearch });
  }

  filterOnRatingClick(rating) {
    if (rating === this.state.currentFilterRating) {
      this.setState({
        reviewsFilteredByRating: this.state.reviews,
        currentFilterRating: null,
      });
    } else {
      const filteredReviews = this.state.reviews
        .filter(review => (review.rating === rating || review.rating - 0.5 === rating));
      this.setState({
        reviewsFilteredByRating: filteredReviews,
        currentFilterRating: rating,
      });
    }
  }

  // this was the most naive way...definitely can optimize
  reviewsFilteredBySearchAndRating() {
    const reviewsFilteredBySearchAndRating = [];
    this.state.reviewsFilteredBySearch.forEach((searchReview) => {
      this.state.reviewsFilteredByRating.forEach((ratingReview) => {
        if (searchReview.user_id === ratingReview.user_id) {
          reviewsFilteredBySearchAndRating.push(searchReview);
        }
      });
    });

    return reviewsFilteredBySearchAndRating;
  }

  setReviewHeader() {
    if (this.state.queryTerm !== '') {
      return (
        <span className={styles.reviewsHeader}>
          Reviews mentioning <i>"{this.state.queryTerm}"</i>
        </span>
      );
    }
    return <span className={styles.reviewsHeader}>Reviews</span>;
  }

  render() {
    if (this.state.reviews.length > 0) {
      return (
        <div className={styles.reviewModule}>
          <FeaturedReview featuredReview={ this.state.featuredReview } />
          <CourseSummary stats={ this.state.courseStats } ratingFilter={ this.filterOnRatingClick }
            selectedStar={ this.state.currentFilterRating } />
          <div className={styles.reviewsContainerHeaderAndSearch}>
              {this.setReviewHeader()}
              <Search searchFilter={this.filterAndBoldOnSearch} />
          </div>
          <ReviewList filteredReviews={ this.reviewsFilteredBySearchAndRating() }
          numOfReviewsToShow={ this.state.numOfReviewsToShow } addTen={ this.addTenReviews }
          />
        </div>
      );
    }
    return (
      <div>
        <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>
      </div>
    );
  }
}

export default App;

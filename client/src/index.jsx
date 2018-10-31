import React from 'react';
import ReactDOM from 'react-dom';

import FeaturedReview from './components/FeaturedReview.jsx';
import ReviewList from './components/ReviewList.jsx';
import CourseSummary from './components/CourseSummary.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCourse: props.courseId,
      courseStats: {},
      featuredReview: {},
      reviews: [],
      reviewsFilteredBySearch: [],
      reviewsFilteredByRating: [],
      currentFilterRating: null,
      numOfReviewsToShow: 10,
    };

    this.filterAndBoldBasedOnSearch = this.filterAndBoldBasedOnSearch.bind(this);
    this.filterOnRatingClick = this.filterOnRatingClick.bind(this);
    this.addTenReviews = this.addTenReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews(this.state.currentCourse);
  }

  filterAndBoldBasedOnSearch(query) {
    const filteredReviews = this.state.reviews.filter(review => (review.review.toUpperCase().includes(query.toUpperCase())));

    const filteredAndBoldedReviews = filteredReviews.map((review) => {
      const queryStartingIndex = review.review.toUpperCase().indexOf(query.toUpperCase());
      const queryEndingIndex = queryStartingIndex + query.length;
      const boldedReview = {
        preQuery: review.review.slice(0, queryStartingIndex),
        query: <b>{review.review.slice(queryStartingIndex, queryEndingIndex)}</b>,
        postQuery: review.review.slice(queryEndingIndex),
      };

      return {
        user: review.user,
        rating: review.rating,
        date: review.date,
        upvotes: review.upvotes,
        downvotes: review.downvotes,
        boldedReview,
      };
    });

    this.setState({ reviewsFilteredBySearch: filteredAndBoldedReviews });
  }

  filterOnRatingClick(rating) {
    if (rating === this.state.currentFilterRating) {
      this.setState({
        reviewsFilteredByRating: this.state.reviews,
        currentFilterRating: null,
      });
    } else {
      const filteredReviews = this.state.reviews.filter(review => (review.rating === rating));
      this.setState({
        reviewsFilteredByRating: filteredReviews,
        currentFilterRating: rating,
      });
    }
  }

  reviewsFilteredBySearchAndRating() {
    const reviewsFilteredBySearchAndRating = [];
    this.state.reviewsFilteredBySearch.forEach((searchReview) => {
      this.state.reviewsFilteredByRating.forEach((ratingReview) => {
        if (searchReview.user.userId === ratingReview.user.userId) {
          reviewsFilteredBySearchAndRating.push(searchReview);
          return;
        }
      });
    });

    return reviewsFilteredBySearchAndRating;
  }

  getReviews(courseId) {
    fetch(`${courseId}/reviews`)
      .then(rawData => (rawData.text()))
      .then((data) => {
        this.setState(JSON.parse(data));
        this.setState({
          reviewsFilteredBySearch: this.state.reviews,
          reviewsFilteredByRating: this.state.reviews,
        });
      });
  }

  addTenReviews() {
    this.setState({ numOfReviewsToShow: this.state.numOfReviewsToShow + 10 });
  }

  render() {
    if (this.state.reviews.length > 0) {
      return (
        <div>
          <h2>Featured review</h2>
          <FeaturedReview featuredReview={ this.state.featuredReview } />
          <h2>Student feedback</h2>
          <CourseSummary stats={ this.state.courseStats } ratingFilter={ this.filterOnRatingClick }/>
          <Search searchFilter={ this.filterAndBoldBasedOnSearch } />
          <h2>Reviews</h2>
          <ReviewList filteredReviews={ this.reviewsFilteredBySearchAndRating() } numOfReviewsToShow={ this.state.numOfReviewsToShow } addTen={ this.addTenReviews }/>
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

ReactDOM.render(<App courseId={Math.floor(Math.random() * 100)}/>, document.getElementById('reviewModule'));

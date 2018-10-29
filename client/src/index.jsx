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
      filteredReviews: [],
    };
    this.filterBasedOnSearch = this.filterBasedOnSearch.bind(this);
  }

  componentDidMount() {
    this.getReviews(this.state.currentCourse);
  }

  filterBasedOnSearch(query) {
    const filteredReviews = this.state.reviews.filter(review => (review.review.toUpperCase().includes(query.toUpperCase())));
    this.setState({ filteredReviews });
  }

  getReviews(courseId) {
    fetch(`${courseId}/reviews`)
      .then(rawData => (rawData.text()))
      .then((data) => {
        this.setState(JSON.parse(data));
        this.setState({ filteredReviews: this.state.reviews});
      });
  }

  render() {
    if (this.state.reviews.length > 0) {
      return (
        <div>
          <h2>Featured review</h2>
          <FeaturedReview featuredReview={ this.state.featuredReview } />
          <h2>Student feedback</h2>
          <CourseSummary stats={ this.state.courseStats }/>
          <Search filterReviews={ this.filterBasedOnSearch } />
          <h2>Reviews</h2>
          <ReviewList reviews={ this.state.filteredReviews }/>
        </div>
      );
    }
    return (
      <div>
        <img src='https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif'></img>
      </div>
    );
  }
}

ReactDOM.render(<App courseId={Math.floor(Math.random()*100)}/>, document.getElementById('reviewModule'));

import React from 'react';
import ReactDOM from 'react-dom';

import FeaturedReview from './components/FeaturedReview.jsx';
import ReviewList from './components/ReviewList.jsx';
import CourseSummary from './components/CourseSummary.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCourse: props.courseId,
      courseStats: {},
      featuredReview: {},
      reviews: [],
    };
  }

  componentDidMount() {
    this.getReviews(this.state.currentCourse);
  }

  getReviews(courseId) {
    fetch(`${courseId}/reviews`)
      .then(rawData => (rawData.text()))
      .then((data) => { this.setState(JSON.parse(data)) })
  }

  render() {
    if (this.state.reviews.length > 0) {
      return (
        <div>
          <h2>Featured review</h2>
          <FeaturedReview featuredReview={ this.state.featuredReview } />
          <h2>Student feedback</h2>
          <CourseSummary stats={ this.state.courseStats }/>
          <h2>Reviews</h2>
          <ReviewList reviews={ this.state.reviews }/>
        </div>
      );
    }
    return (
      <div>
        <img src='https://giphy.com/stickers/spins-uploading-spinning-wheel-of-death-3o7TKtnuHOHHUjR38Y'></img>
      </div>
    );
  }
}

ReactDOM.render(<App courseId={Math.floor(Math.random()*100)}/>, document.getElementById('reviewModule'));

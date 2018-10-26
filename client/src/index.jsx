import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCourse: props.courseId,
      featuredReview: {},
      reviews: [],
      summaryStats: {},
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    fetch('/reviews/99')
      .then((data) => {
        return data.text();
      }).then((data) => {
        console.log('should get data: ', data);
      })
  }

  render() {
    return (
      <div>
      <p>Hello World!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviewModule'));

import React from 'react';
import PropTypes from 'prop-types';
import GraphBarAndStars from './GraphBarAndStars.jsx';
import Stars from './Stars.jsx';
import styles from '../styles/StudentFeedback.css';

class StudentFeedback extends React.Component {
  createFiveGraphRows() {
    const graphRows = [];
    for (let i = 5; i > 0; i -= 1) {
      graphRows.push(
      <GraphBarAndStars key={i} ratingFilter={() => (this.props.ratingFilter(i))}
        percent={ this.props.stats[i] } selectedStar={ this.props.selectedStar } currentStar={i} />,
      );
    }
    return graphRows;
  }

  render() {
    return (
      <div>
        <h2>Student feedback</h2>
        <div className={styles.studentFeedbackContainer}>
          <div className={styles.studentFeedbackAverageContainer}>
            <div className={styles.studentFeedbackAverage}>
              {Number(this.props.stats.avg).toFixed(1)}
            </div>
            <div className={styles.studentFeedbackAverageStars}>
              <Stars average={Number(this.props.stats.avg)}/>
            </div>
            <div>Course Rating</div>
          </div>
          <div className={styles.studentFeedbackBarGraph}>
            {this.createFiveGraphRows()}
          </div>
        </div>
      </div>
    );
  }
}

StudentFeedback.propTypes = {
  stats: PropTypes.shape({
    avg: PropTypes.string.isRequired,
    1: PropTypes.number.isRequired,
    2: PropTypes.number.isRequired,
    3: PropTypes.number.isRequired,
    4: PropTypes.number.isRequired,
    5: PropTypes.number.isRequired,
  }),
  selectedStar: PropTypes.number,
  ratingFilter: PropTypes.func.isRequired,
};

export default StudentFeedback;

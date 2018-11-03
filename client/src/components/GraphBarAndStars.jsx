import React from 'react';
import PropTypes from 'prop-types';
import GraphBar from './GraphBar.jsx';
import styles from '../styles/GraphBarAndStars.css';

class GraphBarAndStars extends React.Component {
  setOpacity() {
    if (this.props.selectedStar === null || this.props.selectedStar === this.props.currentStar) {
      return 1;
    }
    return 0.25;
  }

  render() {
    return (
      <div className={styles.studentFeedbackGraphRow} style={{ opacity: this.setOpacity() }}
        onClick={this.props.ratingFilter}>
        <GraphBar percent={ this.props.percent * 100 }/>
        <img className={styles.rowStars} src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${this.props.currentStar}+stars+white.png`}></img>
        <div className={styles.starButtonHolder}>
          <button className={styles.starButton}>{Math.round(this.props.percent * 100)}%</button>
        </div>
      </div>
    );
  }
}

GraphBarAndStars.propTypes = {
  percent: PropTypes.number.isRequired,
  selectedStar: PropTypes.number,
  currentStar: PropTypes.number.isRequired,
  ratingFilter: PropTypes.func.isRequired,
};

export default GraphBarAndStars;

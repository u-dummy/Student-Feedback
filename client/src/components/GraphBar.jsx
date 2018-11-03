import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/GraphBar.css';

const GraphBar = props => (
  <div className={styles.studentFeedbackGraphOuterBar}>
    <div className={styles.studentFeedbackGraphInnerBar} style={{ width: `${props.percent}%` }}></div>
  </div>
);

GraphBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default GraphBar;

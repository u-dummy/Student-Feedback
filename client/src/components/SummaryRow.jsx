import React from 'react';

import BarGuage from './BarGuage.jsx';

const SummaryRow = props => (
  <div className='studentFeedbackGraphRow' onClick={props.ratingFilter}>
    <BarGuage percent={ props.percent * 100 }/>
    <span>*****</span>
    <button className='starButton'>{Math.round(props.percent * 100)}%</button>
  </div>
);

export default SummaryRow;

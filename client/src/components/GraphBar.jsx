import React from 'react';

const GraphBar = props => (
  <div className='studentFeedbackGraphOuterBar'>
    <div className='studentFeedbackGraphInnerBar' style={{ width: `${props.percent}%` }}></div>
  </div>
);

export default GraphBar;

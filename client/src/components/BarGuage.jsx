import React from 'react';

const BarGuage = props => (
  <div className='studentFeedbackGraphOuterBar'>
    <div className='studentFeedbackGraphInnerBar' style={{ width: `${props.percent}%` }}></div>
  </div>
);

export default BarGuage;

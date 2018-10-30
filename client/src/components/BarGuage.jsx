import React from 'react';

const BarGuage = props => (
  <div style={{ width: `${props.percent}%`, border: '1px solid black' }}></div>
);

export default BarGuage;

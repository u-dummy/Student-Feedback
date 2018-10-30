import React from 'react';

const BarGuage = props => (
  <div style={{ width: '75%', border: '1px solid black' }}>
    <div style={{ width: `${props.percent}%`, border: '1px solid black' }}></div>
  </div>
);

export default BarGuage;

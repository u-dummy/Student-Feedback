import React from 'react';

import BarGuage from './BarGuage.jsx';

const SummaryRow = props => (
  <div onClick={props.ratingFilter}>
    <BarGuage percent={ props.percent * 100 }/>
    <img src='https://mbtskoudsalg.com/images250_/5-stars-transparent-png-5.png'></img>
    <button>{ Math.round(props.percent * 100) }</button>
  </div>
);

export default SummaryRow;

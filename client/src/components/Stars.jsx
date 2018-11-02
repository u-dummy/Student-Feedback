import React from 'react';

const Stars = props => (
  <div className='starsContainer'>
    <div className='emptyStarsWrapper'>
      <img className='emptyStars' src={'https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/emptyStars.png'}></img>
    </div>
    <div className='filledStarsWrapper' style={{ width: `${Math.ceil((props.average / 5) * 10) * 10}%` }}>
      <img className='filledStars' src={'https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/filledStars.png'}></img>
      </div>
  </div>
);

export default Stars;

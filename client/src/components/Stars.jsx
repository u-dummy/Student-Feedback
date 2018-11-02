import React from 'react';

import symbols from '../symbols.jsx';


class Stars extends React.Component {
  render() {
    return (
      <div className='starsContainer'>
        <div className='emptyStarsWrapper'>
          <img className='emptyStars' src={'https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/emptyStars.png'}></img>
        </div>
        <div className='filledStarsWrapper'>
          <img className='filledStars' src={'https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/filledStars.png'}></img>
          </div>
      </div>
    );
  }
};

export default Stars;

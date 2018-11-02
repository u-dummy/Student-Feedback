import React from 'react';

import symbols from '../symbols.jsx';

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
// class Stars extends React.Component {
//   createFiveGraphRows() {

//   }

//   render() {
//     return (
//       <div className='starsContainer'>
//         <span className='star'>{symbols.star}</span>
//         <svg>
//           <linearGradient id="starFill">
//             <stop offset="0%" stop-color="royalblue"/>
//             <stop offset="40%" stop-color="royalblue"/>
//             <stop offset="40%" stop-color="royalblue"/>
//             <stop offset="100%" stop-color="royalblue"/>
//           </linearGradient>
//         </svg>
//       </div>
//     );
//   }
// }

export default Stars;

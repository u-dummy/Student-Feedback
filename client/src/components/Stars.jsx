import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Stars.css';
import symbols from '../symbols.jsx';

const Stars = props => (
  <div className={styles.starsContainer}>
    <div className={styles.emptyStarsWrapper}>
      <img className={styles.emptyStars} src={'https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/emptyStars.png'}></img>
    </div>
    <div className={styles.filledStarsWrapper} style={{ width: `${Math.ceil((props.average / 5) * 10) * 10}%` }}>
      <img className={styles.filledStars} src={'https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/filledStars.png'}></img>
      </div>
  </div>
);
// class Stars extends React.Component {
//   render() {
//     <span className={ styles.stars }>
//     {
//       getStars()
//     }
//     </span>
//     return (
//       <svg width='0' height='0'>
//         <linearGradient class={styles.starPartialFill}>
//           <stop stopColor='#f4c150' offset='0%' />
//           <stop stopColor='#f4c150' offset={ partialFill() } />
//           <stop stopColor='#dedfe0' offset={ partialFill() } />
//           <stop stopColor='#dedfe0' offset='100%' />
//         </linearGradient>
//         <linearGradient class={styles.starPartialFill}>
//           <stop stopColor='#dedfe0' offset='100%' />
//         </linearGradient>
//         <linearGradient class={styles.starFilled}>
//           <stop stopColor='#f4c150' offset='100%' />
//         </linearGradient>
//       </svg>
//     );
//   }
// }

Stars.propTypes = {
  average: PropTypes.number.isRequired,
};

export default Stars;

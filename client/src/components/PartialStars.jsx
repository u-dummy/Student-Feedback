
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Stars.css';

class PartialStars extends React.Component {
  createPartialStars() {
    const stars = [];
    const starCount = 5;
    let totalFill = Math.ceil(this.props.rating * 100);
    let fill = 0;
    let partialFill = 0;
    let star = <div></div>;

    for (let i = 0; i < starCount; i += 1) {
      totalFill >= 100 ? fill = 100 : fill = totalFill;
      if (fill === 100) {
        star = (
          <span key={i} className={ styles.fullStar } style={this.props.starStyle}>
            <FontAwesomeIcon icon={ faStar } />
          </span>
        );
      } else if (fill > 0) {
        partialFill = fill;
        star = (
          <span key={i} className={ styles.partialStar } style={this.props.starStyle} >
            <FontAwesomeIcon icon={ faStar } />
          </span>
        );
      } else {
        star = (
          <span key={i} className={ styles.emptyStar } style={this.props.starStyle} >
            <FontAwesomeIcon icon={ faStar } />
          </span>
        );
      }
      stars.push(star);
      totalFill -= fill;
    }

    stars.push(
      <svg key={starCount + 1} width='0' height='0'>
        <linearGradient id='starEmpty'>
          <stop stopColor='#dedfe0' offset='100%' />
        </linearGradient>
        <linearGradient id='starFilled'>
          <stop stopColor='#f4c150' offset='100%' />
        </linearGradient>
        <linearGradient id='starPartialFill'>
            <stop stopColor='#f4c150' offset='0%' />
            <stop stopColor='#f4c150' offset={`${partialFill}%`} />
            <stop stopColor='#dedfe0' offset={`${partialFill}%`} />
            <stop stopColor='#dedfe0' offset='100%' />
        </linearGradient>
      </svg>,
    );

    return stars;
  }

  render() {
    return (
      <div>
        {this.createPartialStars()}
    </div>
    );
  }
}

PartialStars.propTypes = {
  rating: PropTypes.number.isRequired,
  starStyle: PropTypes.shape({
    fontSize: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
  }),
};

export default PartialStars;

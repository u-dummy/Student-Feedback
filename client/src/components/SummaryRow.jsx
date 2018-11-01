import React from 'react';

import BarGuage from './BarGuage.jsx';

class SummaryRow extends React.Component {
  render() {
    let fade = 0.25;

    if (this.props.selectedStar === null || this.props.selectedStar === this.props.star) {
      fade = 1;
    }

    return (
      <div className='studentFeedbackGraphRow' style={{ opacity: fade }} onClick={this.props.ratingFilter}>
      <BarGuage percent={ this.props.percent * 100 }/>
      <span>
        <img className='summaryStars' src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${this.props.star}+stars+white.png`}></img>
      </span>
      <div className='starButtonHolder'>
        <button className='starButton'>{Math.round(this.props.percent * 100)}%</button>
      </div>
    </div>
    );
  }
}

export default SummaryRow;

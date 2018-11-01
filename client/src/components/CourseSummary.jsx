import React from 'react';

import SummaryRow from './SummaryRow.jsx';

class CourseSummary extends React.Component {
  render() {
    let fade = 1;

    if (this.props.selectedStar !== null) {
      fade = 0.25;
    }

    return (
      <div>
        <h2>Student feedback</h2>
        <div className='studentFeedbackContainer'>
          <div className='studentFeedbackAverageContainer'>
            <div className='studentFeedbackAverage'>{Number(this.props.stats.avg).toFixed(1)}</div>
          </div>
          <div className='studentFeedbackBarGraph' >
            <SummaryRow percent={ this.props.stats[5] } selectedStar={ this.props.selectedStar }
            star={5} ratingFilter={() => (this.props.ratingFilter(5))}/>
            <SummaryRow percent={ this.props.stats[4] } selectedStar={ this.props.selectedStar }
            star={4} ratingFilter={() => (this.props.ratingFilter(4))}/>
            <SummaryRow percent={ this.props.stats[3] } selectedStar={ this.props.selectedStar }
            star={3} ratingFilter={() => (this.props.ratingFilter(3))}/>
            <SummaryRow percent={ this.props.stats[2] } selectedStar={ this.props.selectedStar }
            star={2} ratingFilter={() => (this.props.ratingFilter(2))}/>
            <SummaryRow percent={ this.props.stats[1] } selectedStar={ this.props.selectedStar }
            star={1} ratingFilter={() => (this.props.ratingFilter(1))}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseSummary;

// num is null or your star# then do nothing, else set opacity to 25%
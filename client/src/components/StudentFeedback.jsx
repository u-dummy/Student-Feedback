import React from 'react';

import GraphBarAndStars from './GraphBarAndStars.jsx';
import Stars from './Stars.jsx';
import symbols from '../symbols.jsx';

class StudentFeedback extends React.Component {
  createFiveGraphRows() {
    const graphRows = [];
    for (let i = 5; i > 0; i -= 1) {
      graphRows.push(
      <GraphBarAndStars percent={ this.props.stats[i] } selectedStar={ this.props.selectedStar }
      currentStar={i} ratingFilter={() => (this.props.ratingFilter(i))}/>,
      );
    }
    return graphRows;
  }

  render() {
    return (
      <div>
        <h2>Student feedback</h2>
        <div className='studentFeedbackContainer'>
          <div className='studentFeedbackAverageContainer'>
            <div className='studentFeedbackAverage'>{Number(this.props.stats.avg).toFixed(1)}</div>
            <div className='studentFeedbackAverageStars'>
              <Stars average={Number(this.props.stats.avg)}/>
            </div>
            <div className='studentFeedbackText'>Course Rating</div>
          </div>
          <div className='studentFeedbackBarGraph'>
            {this.createFiveGraphRows()}
          </div>
        </div>
      </div>
    );
  }
}

export default StudentFeedback;

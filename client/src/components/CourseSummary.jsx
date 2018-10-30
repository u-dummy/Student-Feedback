import React from 'react';

import BarGuage from './BarGuage.jsx';

class CourseSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Average: {this.props.stats.avg}</div>
        <div>
          <div style={{ border: '1px solid black' }}>
            <BarGuage percent={ this.props.stats[5] * 100 }/>
          </div>
          <div>
            { this.props.stats[5] * 100 }
          </div>
        </div>
        <div>
          <div style={{ border: '1px solid black' }}>
            <BarGuage percent={ this.props.stats[4] * 100 }/>
          </div>
          <div>
            { this.props.stats[4] * 100 }
          </div>
        </div>
        <div>
          <div style={{ border: '1px solid black' }}>
            <BarGuage percent={ this.props.stats[3] * 100 }/>
          </div>
          <div>
            { this.props.stats[3] * 100 }
          </div>
        </div>
        <div>
          <div style={{ border: '1px solid black' }}>
            <BarGuage percent={ this.props.stats[2] * 100 }/>
          </div>
          <div>
            { this.props.stats[2] * 100 }
          </div>
        </div>
        <div>
          <div style={{ border: '1px solid black' }}>
            <BarGuage percent={ this.props.stats[1] * 100 }/>
          </div>
          <div>
            { this.props.stats[1] * 100 }
          </div>
        </div>
      </div>
    );
  }
}

export default CourseSummary;

import React from 'react';

class CourseSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Average: {this.props.stats.avg}</div>
        <div>1's: {this.props.stats[1]}</div>
        <div>2's: {this.props.stats[2]}</div>
        <div>3's: {this.props.stats[3]}</div>
        <div>4's: {this.props.stats[4]}</div>
        <div>5's: {this.props.stats[5]}</div>
      </div>
    );
  }
}

export default CourseSummary;
import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.query = React.createRef();
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.props.filterReviews(this.query.current.value);
  }

  render() {
    return (
      <form onSubmit={this.handleInputSubmit}>
        <input
          placeholder='Search reviews'
          ref={this.query}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Search;

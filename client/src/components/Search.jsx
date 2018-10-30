import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.search = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.setState({ query: this.search.current.value });
    this.props.filterReviews(this.search.current.value);
  }

  render() {
    return (
      <div>
        <input
          placeholder='Search reviews'
          ref={this.search}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </div>
    );
  }
}

export default Search;

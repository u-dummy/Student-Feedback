import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.query = React.createRef();
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.props.searchFilter(this.query.current.value);
  }

  render() {
    return (
      <form className='reviewSearchBar' onSubmit={this.handleInputSubmit}>
        <div className='reviewSearchInputWrapper'>
          <span>
            <input type='text' className='reviewSearchInput' placeholder='Search reviews' ref={this.query}/>
          </span>
          <span>
            <button type='submit'>Submit</button>          
          </span>
        </div>
      </form>
    );
  }
}

export default Search;

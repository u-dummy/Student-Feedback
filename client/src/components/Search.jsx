import React from 'react';

import symbols from '../symbols.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.query = React.createRef();
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.props.searchFilter(this.query.current.value);
  }

  clearSearch() {
    this.props.searchFilter('');
    this.query.current.value = '';
  }

  showClearSearchButton() {
    if (this.props.currentlyFiltered) {
      return (
        <button className='clearSearchButton' type='button' onClick={ this.clearSearch }>
          <span className='clearSearchSymbol'>{symbols.clear}</span>
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <form className='reviewSearchBar' onSubmit={this.handleInputSubmit}>
        <div className='reviewSearchInputWrapper'>
            <input type='text' className='reviewSearchInput' placeholder='Search reviews' ref={this.query}/>
            {this.showClearSearchButton()}
            <button className='reviewSearchButton' type='submit'>{symbols.magGlass}</button>
        </div>
      </form>
    );
  }
}

export default Search;

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Search.css';
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
        <button className={styles.clearSearchButton} type='button' onClick={ this.clearSearch }>
          <span className={styles.clearSearchSymbol}>{symbols.clear}</span>
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <form className={styles.reviewSearchBar} onSubmit={this.handleInputSubmit}>
        <div className={styles.reviewSearchInputWrapper}>
            <input type='text' className={styles.reviewSearchInput} placeholder='Search reviews' ref={this.query}/>
            {this.showClearSearchButton()}
            <button className={styles.reviewSearchButton} type='submit'>{symbols.magGlass}</button>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  currentlyFiltered: PropTypes.bool,
  searchFilter: PropTypes.func.isRequired,
};

export default Search;

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Search.css';
import symbols from '../symbols.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    // this.query = React.createRef();
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.props.searchFilter(this.state.query);
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  clearSearch() {
    this.props.searchFilter('');
    this.setState({ query: '' });
  }

  showClearSearchButton() {
    if (this.state.query !== '') {
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
            <input type='text' name='query' value={this.state.query} className={styles.reviewSearchInput} placeholder='Search reviews' onChange={this.handleInputChange} />
            {this.showClearSearchButton()}
            <button className={styles.reviewSearchButton} type='submit'>{symbols.magGlass}</button>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  searchFilter: PropTypes.func.isRequired,
};

export default Search;

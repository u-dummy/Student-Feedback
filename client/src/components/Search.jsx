import React from 'react';

class Search extends React.Component {
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
            <input type='text' className='reviewSearchInput' placeholder='Search reviews' ref={this.query}/>
            <button className='reviewSearchButton' type='submit'><i className='fas fa-search'></i></button>          
        </div>
      </form>
    );
  }
}

export default Search;

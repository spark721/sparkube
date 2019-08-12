
import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import SearchIndexContainer from '../../video/search_index_container';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
  }

  update(e) {
    e.preventDefault();
    this.setState({ query: e.target.value });
  };

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    let searchQuery = this.state.query;
    location.replace(`#/results/${searchQuery}`);
  }


  render() {
    console.log('query: ', this.state.query);

    return (
      <div className="search-form-whole">
        <div className="search-bar">
          <form
            className="search-form"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <input
              type="text"
              value={this.state.query}
              onChange={this.update.bind(this)}
              className="search-input"
              placeholder="Search"
            />
          </form>
        </div>
        <div
          onClick={this.handleSubmit.bind(this)}
          className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
    )
  }
}

export default SearchForm;
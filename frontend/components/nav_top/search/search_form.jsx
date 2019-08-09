
import React from 'react';

class SearchForm extends React.Component {


  render() {
    return (
      <div className="search-form-whole">
        <div className="search-bar">
          <form
            className="search-form"
          >
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
    )
  }
}

export default SearchForm;
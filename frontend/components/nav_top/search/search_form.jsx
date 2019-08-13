
import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  };

  update(e) {
    e.preventDefault();
    this.setState({ query: e.target.value });
  };

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    let query = this.state.query;
    let notEmptyQuery = query.split('').some( (char) => {
      return char !== ' ';
    });


    if (query.length && notEmptyQuery) {
      let search = `?search_query=${this.state.query}`;
      search = new URLSearchParams(search).toString();
      this.props.history.push({
        pathname: `/results`,
        search,
      });
    };
  };


  render() {
    // console.log('query: ', this.state.query);

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
    );
  };
};

export default withRouter(SearchForm);
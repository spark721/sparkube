
import React from 'react';
import NavTop from '../nav_top/nav_top';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {

  constructor(props) {
    // debugger
    super(props);
    this.state = {
      query: new URLSearchParams(this.props.searchQuery).get('search_query'),
      videos: null,
    };
    this.handleQuery = this.handleQuery.bind(this);
  };

  handleQuery(query) {
    for (let i = 0; i < query.length; i += 1) {
      let char = query[i];
      if (char !== ' ') {
        return query = query.slice(i);
      };
    };
    return query;
  };

  componentDidMount() {
    // debugger
    let searchQuery = this.handleQuery(this.state.query);
    this.props.searchVideos(searchQuery).then( res => {
      if (res.payload.videos) {
        this.setState({
          videos: Object.values(res.payload.videos),
        });
      } else {
        this.setState({ videos: [] });
      }
    });
  };

  componentDidUpdate(prevProps) {
    // debugger
    let query = new URLSearchParams(this.props.searchQuery).get('search_query');
    query = this.handleQuery(query);
    let videos = [];

    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.props.searchVideos(query).then(res => {
        if (res.payload.videos) videos = Object.values(res.payload.videos);
        this.setState({ query, videos, });
      });
    }
  }

  render() {
    // search_index.jsx
    // debugger

    if (this.state.videos === null) {
      return (
        <div>Loading</div>
      )
    }

    let query = this.handleQuery(this.state.query);

    const resultText = (this.state.videos.length) ?
      <span>Result for "{query}"</span>
      : <span>No result found for "{query}"</span>

    let videos = this.state.videos.map((video, i) => {
      return <SearchIndexItem
              key={i}
              video={video} />;
    });

    return (
      <div className="search-results-page">
        <NavTop />
        <div className="search-results-section">
          <div className="search-results">
            <div className="search-results-text">
              {resultText}
            </div>
            <div className="search-index">
              <ul className="search-index-ul">{videos}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default SearchIndex;
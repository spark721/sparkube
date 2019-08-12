
import React from 'react';
import NavTop from '../nav_top/nav_top';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {

  constructor(props) {
    // debugger
    super(props);
    this.state = {
      query: this.props.searchQuery,
      videos: null,
    }
  }

  componentDidMount() {
    // debugger
    let searchQuery = this.state.query;
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

    let query = this.props.searchQuery;
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

    const resultText = (this.state.videos.length) ?
      <span>Result for "{this.state.query}"</span>
      : <span>No result found for "{this.state.query}"</span>

    let videos = this.state.videos.map((video, i) => {
      return <SearchIndexItem
              key={i}
              video={video} />;
    });

    return (
      <div>
        <NavTop />
        <div className="search-results">
          <div className="search-results-text">
            {resultText}
          </div>
          <div className="search-index">
            <ul className="search-index-ul">{videos}</ul>
          </div>
        </div>
      </div>
    );
  };
};

export default SearchIndex;
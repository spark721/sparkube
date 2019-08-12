
import React from 'react';
import NavTop from '../nav_top/nav_top';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {

  constructor(props) {
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
      this.setState({ videos: Object.values(res.payload.videos) });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // debugger
  }

  render() {
    // search_index.jsx
    // debugger

    if (this.state.videos === null) {
      return (
        <div>Loading</div>
      )
    }

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
            <span>Result for "{this.state.query}"</span>
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
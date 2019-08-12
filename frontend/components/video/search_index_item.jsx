
import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = ({ video }) => {
  return (
    <li className='search-index-li'>
      <div className='search-index-poster-div'>
        <Link to={`/watch/${video.id}`}>
          <img src={video.poster} alt="" className="search-index-poster"/>
        </Link>
      </div>

      <Link to={`/watch/${video.id}`} className='search-index-link'>
        <div className='search-index-text'>
          <div className='search-index-title'>
            <span>{video.title}</span>
          </div>
          <div className='search-index-author'>
            <span>{video.username}&nbsp;&nbsp;
            •&nbsp;&nbsp;588,087 views</span>
          </div>
          <div className='search-index-desc'>
            <span>{video.description}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SearchIndexItem;
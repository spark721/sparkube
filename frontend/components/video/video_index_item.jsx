
import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = ({ video }) => {
  return (
    <li className='video-index-splash-li'>
      <Link to={`/watch/${video.id}`}>
        <div className='video-index-item-splash'>
          {/* <video width="210" height="118" poster={video.poster} preload="metadata">
            <source
              src={video.videoUrl}
              type="video/mp4" />
          </video> */}
          <img src={video.poster} alt="" className="video-index-item-img"/>
          <div className='video-index-text-below'>
            <span className='video-index-title-below'>{video.title}</span>
            <div className='video-index-bottom-container'>
              <p className='video-index-author-below'>{video.username}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default VideoIndexItem;
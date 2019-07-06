
import React from 'react';

const VideoIndexItem = (props) => {
  return (
    <div>
      <video width="200" controls>
        <source
          src={props.video.videoUrl}
          type="video/mp4" />
      </video>
      {/* <p>{video.title}</p> */}
    </div>
  );
};

export default VideoIndexItem;
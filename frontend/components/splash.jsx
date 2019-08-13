
import React from 'react';

import NavTop from './nav_top/nav_top';
import VideoIndexContainer from './video/video_index_container';
import SideBar from './sidebar/side_bar';


const Splash = () => {
  return (
    <div>
      <NavTop />
      <div className="home-page">
        <SideBar />
        <VideoIndexContainer />
      </div>
    </div>
  );
};

export default Splash;
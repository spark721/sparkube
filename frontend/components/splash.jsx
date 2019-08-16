
import React from 'react';

import NavTop from './nav_top/nav_top';
import VideoIndexContainer from './video/video_index_container';
import SideBarContainer from './sidebar/side_bar_container';


const Splash = () => {
  // debugger
  return (
    <div>
      <NavTop />
      <div className="home-page">
        <SideBarContainer />
        <VideoIndexContainer />
      </div>
    </div>
  );
};

export default Splash;
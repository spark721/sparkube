
import React from 'react';

// import NavTop from './nav_top/nav_top';
import NavTopContainer from './nav_top/nav_top_conatiner';
import VideoIndexContainer from './video/video_index_container';
import SideBarContainer from './sidebar/side_bar_container';


const Splash = () => {
  // debugger
  return (
    <div>
      <NavTopContainer />
      <div className="home-page">
        <SideBarContainer />
        <VideoIndexContainer />
      </div>
    </div>
  );
};

export default Splash;
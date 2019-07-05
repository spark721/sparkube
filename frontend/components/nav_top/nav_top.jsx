
import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const NavTop = () => {
  return (
    <div className='nav-top'>
      <div className='nav-left'>
        <div className='menu-bars'>
          <i className="fas fa-bars"></i>
        </div>

        <div className='nav-logo'>
          <i className="fab fa-youtube"></i>
          <span className='nav-logo-text'>SparKube</span>
        </div>
      </div>

      <div className='nav-right'>
        <GreetingContainer />
      </div>
    </div>
  );
};

export default NavTop;
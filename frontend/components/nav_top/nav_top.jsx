
import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const NavTop = () => {
  return (
    <div className='nav-top'>
      <i className="fas fa-bars"></i>
      <i className="fab fa-youtube"></i>
      <GreetingContainer />
    </div>
  );
};

export default NavTop;
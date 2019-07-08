
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router-dom';

const NavTop = () => {
  return (
    <div className='nav-top'>
      <div className='nav-top-left'>
        <div className='menu-bars'>
          <Link>
            <i className="fas fa-bars"></i>
          </Link>
        </div>

        <div className='nav-logo'>
          <Link to='/' className='main-logo-text-link'>
            <i className="fab fa-youtube"></i>
            <span className='nav-logo-text'>SparKube</span>
          </Link>
        </div>
      </div>

      <div className='nav-right'>
          <div className="upload-icon">
        <Link>
            <i className="fas fa-video"></i>
        </Link>
          </div>
        <GreetingContainer />
      </div>
    </div>
  );
};

export default NavTop;
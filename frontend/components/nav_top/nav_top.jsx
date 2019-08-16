
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SearchForm from './search/search_form';
import { Link } from 'react-router-dom';

const NavTop = (props) => {
  let sideFunc = props.expand ?
  props.collapseSidebar : props.expandSidebar;
  
  if (props.useModal) sideFunc = props.modal ?
    props.closeModal : props.openModal;
  
  // debugger
  return (
    <div className='nav-top'>
      <div className='nav-top-left'>
        <div
          className='menu-bars'
          onClick={sideFunc}>
          <i className="fas fa-bars"></i>
        </div>

        <div className='nav-logo'>
          <Link to='/' className='main-logo-text-link'>
            <i className="fab fa-youtube"></i>
            <span className='nav-logo-text'>SparKube</span>
          </Link>
        </div>
      </div>

      <SearchForm />

      <div className='nav-right'>
        <div className="upload-icon">
          <Link to='/upload' >
              <i className="fas fa-video"></i>
          </Link>
        </div>
        <GreetingContainer />
      </div>
    </div>
  );
};

export default NavTop;
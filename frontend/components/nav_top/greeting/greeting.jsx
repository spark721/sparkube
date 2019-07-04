
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Greeting = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <img src={window.logoURL} alt=""/>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div >
        <Link className='nav-sign-in' to='/login'>
          {/* <FontAwesomeIcon icon={faUserCircle} className='sign-in-icon' /> */}
          <i class="fas fa-user-circle sign-in-icon"></i>
          <p class="sign-in-text">SIGN IN</p>
        </Link>
      </div>
    );
  }
};

export default Greeting;
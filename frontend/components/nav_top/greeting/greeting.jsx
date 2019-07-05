
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Greeting = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <button 
          className='nav-sign-out'
          onClick={props.logout} >
          <span className='sign-out-text'>Log Out</span>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Link className='nav-sign-in' to='/login'>
          <i className="fas fa-user-circle sign-in-icon"></i>
          <p className="sign-in-text">SIGN IN</p>
        </Link>
      </div>
    );
  }
};

export default Greeting;
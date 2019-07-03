
import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <h2>Welcome {props.currentUser.username}</h2>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/signup'>Sign up</Link>
        <br /><br />
        <Link to='/login'>Log In</Link>
      </div>
    );
  }
};

export default Greeting;
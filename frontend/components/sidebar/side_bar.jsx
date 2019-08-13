
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className="side-bar-whole">
      <div className="side-bar-links">
        <Link className="side-bar-links-wrap" to='/'>
          <div className="side-bar-link-box">
            <div className="side-bar-icon">
              <i class="fas fa-home"></i>
            </div>
            <div className="side-bar-text">
              <span>Home</span>
            </div>
          </div>
        </Link>

        <Link className="side-bar-links-wrap" to='/upload'>        
          <div className="side-bar-link-box">
            <div className="side-bar-icon">
              <i class="fas fa-video"></i>
            </div>
            <div className="side-bar-text">
              <span>Upload</span>
            </div>
          </div>
        </Link>

        <a href="https://github.com/spark721/"
          className="side-bar-links-wrap"
          target="_blank">
          <div className="side-bar-link-box">
            <div className="side-bar-icon">
              <i class="fab fa-github"></i>
            </div>
            <div className="side-bar-text">
              <span>Github</span>
            </div>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/spark721"
          className="side-bar-links-wrap"          
          target="_blank">
          <div className="side-bar-link-box">
            <div className="side-bar-icon">
              <i class="fab fa-linkedin"></i>
            </div>
            <div className="side-bar-text">
              <span>LinkedIn</span>
            </div>
          </div>
        </a>

        <a href="https://spark721.com"
          className="side-bar-links-wrap"
          target="_blank">
          <div className="side-bar-link-box">
            <div className="side-bar-icon">
              <i class="fas fa-user-circle"></i>
            </div>
            <div className="side-bar-text">
              <span>Author's site</span>
            </div>
          </div>
        </a>
      </div>

      <div className="side-bar-login-box">
        <div className="side-bar-login-text">
          <span>Sign in to like videos, comment, and subscribe.</span>
        </div>
        <div className="nav-sign-in-div">
          <Link className='nav-sign-in' to='/login'>
            <i className="fas fa-user-circle sign-in-icon"></i>
            <p className="sign-in-text">SIGN IN</p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

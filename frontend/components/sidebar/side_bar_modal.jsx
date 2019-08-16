
import React from 'react';
import { Link } from 'react-router-dom';

const SideBarModal = (props) => {
  // debugger
  let currentUser = props.currentUser;

  const modalStatus = props.modal ? "modal-show" : "modal-hide"

  const loginSection = props.expand ?
    currentUser ?
      <div></div>
      :
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
    : <div></div>;

  const sideBarWhole =
    <aside className={`side-bar-whole`}>
      <div className='nav-top-left'>
        <div
          className='menu-bars'
          onClick={props.closeModal}>
          <i className="fas fa-bars"></i>
        </div>

        <div className='nav-logo'>
          <Link to='/' className='main-logo-text-link'>
            <i className="fab fa-youtube"></i>
            <span className='nav-logo-text'>SparKube</span>
          </Link>
        </div>
      </div>
      <div className="side-bar-links">
        <Link className="side-bar-links-wrap" to='/'>
          <div className="side-bar-link-box">
            <div className="side-bar-icon">
              <i className="fas fa-home"></i>
            </div>
            <div className="side-bar-text">
              <span>Home</span>
            </div>
          </div>
        </Link>

        <Link className="side-bar-links-wrap" to='/upload'>
          <div className="side-bar-link-box">
            <div className="side-bar-icon">
              <i className="fas fa-video"></i>
            </div>
            <div className="side-bar-text">
              <span>Upload</span>
            </div>
          </div>
        </Link>

        <a href="https://github.com/spark721/sparkube"
          className="side-bar-links-wrap"
          target="_blank">
          <div className="side-bar-link-box">
            <div className="side-bar-icon">
              <i className="fab fa-github"></i>
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
              <i className="fab fa-linkedin"></i>
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
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="side-bar-text">
              <span>Author's site</span>
            </div>
          </div>
        </a>
      </div>

      {loginSection}
    </aside>;

  // const closeModalFunc = props.closeModal;
  // debugger
  return (
    <div className={`modal-background ${modalStatus}`}>
      <div
        className="modal-child"
        onClick={e => {
          e.stopPropagation();
          props.closeModal();
        }}>
        {sideBarWhole}
      </div>
    </div>
  )
};

export default SideBarModal;

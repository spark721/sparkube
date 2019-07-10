
import React from 'react';
import NavTop from '../nav_top/nav_top';
import SideIndexContainer from './side_index_container';

class VideoShow extends React.Component {

  componentDidMount() {
    this.props.getVideo(this.props.match.params.videoId);
  };
  
  componentDidUpdate(prevProps) {
    // debugger;
    if (this.props.video && prevProps.video) {
      if (this.props.video.videoUrl !== prevProps.video.videoUrl) {
        window.location.reload();
      };
    };
  };

  handleDelete(e) {
    e.preventDefault();
    // debugger;
    this.props.deleteVideo(this.props.video.id).then(
      () => this.props.history.push('/'),
    )
  }

  handleUpdate(e) {
    e.preventDefault();
  }

  renderError() {
    return (
      <ul className='auth-errors'>
        {this.props.errors.map((error, i) => {
          return (
            <li
              key={`error-${i}`}
              className="render-error" >
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    // debugger
    if (!this.props.video) {
      return (
        <div>Loading</div>
      );
    }

    let currentUser = this.props.currentUser;

    const deleteButton = currentUser ? 
      currentUser.id === this.props.video.author_id ?
        <div className='show-button-div'>
          <button className="show-delete-button"
                  onClick={this.handleDelete.bind(this)} >
            <p>DELETE</p>
          </button>
          <button className="show-edit-button"
                  onClick={this.handleUpdate.bind(this)}
                  disabled >
            <p>EDIT VIDEO</p>
          </button>
        </div>
        : <div></div>
      : <div></div>;

    return (
      <div>
        <NavTop />
        <div className='video-show-page-whole'>

          <div className='video-show-page'>
            <video width='100%' className='video-show-player' controls>
              <source
                src={this.props.video.videoUrl}
                type="video/mp4" />
            </video>

            <div className='video-show-title-div'>
              <span className='video-show-title-text'>{this.props.video.title}</span>
              <div className='video-show-stats-div'>
                <span className='video-show-views-text'>40,588,087 views</span>
              </div>
            </div>

            <div className='author-description-div'>
              <div className='author-div'>
                <div className='author-date-div'>
                  <span className='author-text'>{this.props.video.username}</span>
                  <br />
                  <span className='date-text'>Published on Jul 7, 2019</span>
                </div>
                <div>
                  {deleteButton}
                </div>
              </div>
              <div className='description-div'>
                <p>{this.props.video.description}</p>
              </div>
            </div>
          </div>

          <div className='video-show-index'>
            <SideIndexContainer videoId={this.props.videoId}/>
          </div>
        </div>
      </div>
    );
  };
};

export default VideoShow;
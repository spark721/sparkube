
import React from 'react';
import NavTop from '../nav_top/nav_top';
import SideIndexContainer from './side_index_container';
import { Link, Redirect } from 'react-router-dom';
import LikeVideoComponent from './video_like';
import DislikeVideoComponent from './video_dislike';



class VideoShow extends React.Component {

  componentDidMount() {
    this.props.getVideo(this.props.match.params.videoId);
  };
  
  // componentDidUpdate(prevProps) {
    // debugger;
    // if (this.props.video && prevProps.video) {
      // if (this.props.video.likes !== prevProps.video.likes) {
      //   window.location.reload();
      // };
    // };
  // };

  handleDelete(e) {
    e.preventDefault();
    // debugger;
    this.props.deleteVideo(this.props.video.id).then(
      () => this.props.history.push('/'),
    )
  }

  // handleUpdate(e) {
  //   e.preventDefault();
  //   () => <Redirect to={`/video/${this.props.video.id}/edit`} />
  // }


  handleDislike(e) {
    e.preventDefault();
    let currentUser = this.props.currentUser;

    return currentUser ? console.log(currentUser) : console.log("seriously?")
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
          <button className="show-edit-button" >
            <Link to={`/video/${this.props.video.id}/edit`}>
              <p>EDIT VIDEO</p>
            </Link>
          </button>
        </div>
        : <div></div>
      : <div></div>;

    return (
      <div>
        <NavTop />
        <div className='video-show-page-whole'>

          <div className='video-show-page'>
            <video width='100%'
                   className='video-show-player'
                   key={this.props.video.id}
                   controls >
              <source
                src={this.props.video.videoUrl}
                type="video/mp4" />
            </video>

            <div className='video-show-title-div'>
              <div>
                <span className='video-show-title-text'>{this.props.video.title}</span>
                <div className='video-show-stats-div'>
                  <span className='video-show-views-text'>40,588,087 views</span>
                </div>
              </div>

              <div className="likes-dislikes">

                {/* <div className="likes-count"
                     onClick={this.handleLike.bind(this)} >
                  <i className="fas fa-thumbs-up"></i>
                  <span>{this.props.video.likes}</span>
                </div> */}
                <LikeVideoComponent
                  video={this.props.video}
                  currentUser={currentUser}
                  likeVideo={this.props.likeVideo}
                  unlikeVideo={this.props.unlikeVideo} />

                
                {/* <div className="dislikes-count"
                     onClick={this.handleDislike.bind(this)} >
                  <i className="fas fa-thumbs-down"></i>
                  <span>{this.props.video.dislikes}</span>
                </div> */}
                <DislikeVideoComponent
                  video={this.props.video}
                  currentUser={currentUser}
                  dislikeVideo={this.props.dislikeVideo}
                  undislikeVideo={this.props.undislikeVideo} />
                

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
            <SideIndexContainer videoId={this.props.video.id}/>
          </div>
        </div>
      </div>
    );
  };
};

export default VideoShow;
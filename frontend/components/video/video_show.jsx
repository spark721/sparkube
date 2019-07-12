
import React from 'react';
import NavTop from '../nav_top/nav_top';
import SideIndexContainer from './side_index_container';
import { Link } from 'react-router-dom';


class VideoShow extends React.Component {

  constructor(props) {
    // debugger
    super(props);
    this.state = {
      video: this.props.video || {}
    }
  }

  componentDidMount() {
    // debugger
    this.props.getVideo(this.props.match.params.videoId);
  };

  componentDidUpdate() {
    // debugger
    if (this.props.match.params.videoId !== `${this.state.video.id}`) {
      this.setState({ video: this.props.videos[this.props.match.params.videoId] })
    }
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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteVideo(this.state.video.id).then(
      () => this.props.history.push('/'),
    )
  }

  handleLike(e) {
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let videoId = this.state.video.id;
    // debugger
    if (this.state.video.curUserLikes) {
      unlikeVideo(this.state.video.likeId).then(
        (res) => (
          this.setState({
            video: {
              likes: res.likes,
              curUserLikes: false
          }})
        )
      )
      // debugger
    } else {
      likeVideo(videoId).then(
        (res) => (
          this.setState({
            video: {
              likes: res.likes,
              curUserLikes: true
          }})
        )
      );
      // debugger
    }
  }

  handleDislike(e) {
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let videoId = this.state.video.id;

    if (this.state.video.curUserDislikes) {
      undislikeVideo(this.state.video.dislikeId).then(
        (res) => (
          this.setState({
            dislikes: res.dislikes,
            curUserDislikes: false
          })
        )
      )
    } else {
      dislikeVideo(videoId).then(
        (res) => (
          this.setState({
            dislikes: res.dislikes,
            curUserDislikes: true
          })
        )
      );
    }
  }


  render() {
    // debugger
    if (!this.state.video) {
      return (
        <div>Loading</div>
      );
    }

    let currentUser = this.props.currentUser;

    const deleteButton = currentUser ? 
      currentUser.id === this.state.video.author_id ?
        <div className='show-button-div'>
          <button className="show-delete-button"
                  onClick={this.handleDelete.bind(this)} >
            <p>DELETE</p>
          </button>
          <button className="show-edit-button" >
            <Link to={`/video/${this.state.video.id}/edit`}>
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
                   key={this.state.video.id}
                   controls >
              <source
                src={this.state.video.videoUrl}
                type="video/mp4" />
            </video>

            <div className='video-show-title-div'>
              <div>
                <span className='video-show-title-text'>{this.state.video.title}</span>
                <div className='video-show-stats-div'>
                  <span className='video-show-views-text'>40,588,087 views</span>
                </div>
              </div>

              <div className="likes-dislikes">

                <div className="likes-count"
                     onClick={this.handleLike.bind(this)} >
                  <i className="fas fa-thumbs-up"></i>
                  <span>{this.state.video.likes}</span>
                </div>

                {/* <LikeVideoComponent
                  video={this.state.video}
                  currentUser={currentUser}
                  likeVideo={this.props.likeVideo}
                  unlikeVideo={this.props.unlikeVideo} /> */}

                
                <div className="dislikes-count"
                     onClick={this.handleDislike.bind(this)} >
                  <i className="fas fa-thumbs-down"></i>
                  <span>{this.state.video.dislikes}</span>
                </div>

                {/* <DislikeVideoComponent
                  video={this.state.video}
                  currentUser={currentUser}
                  dislikeVideo={this.props.dislikeVideo}
                  undislikeVideo={this.props.undislikeVideo} /> */}
                

              </div>
            </div>

            <div className='author-description-div'>
              <div className='author-div'>
                <div className='author-date-div'>
                  <span className='author-text'>{this.state.video.username}</span>
                  <br />
                  <span className='date-text'>Published on Jul 7, 2019</span>
                </div>
                <div>
                  {deleteButton}
                </div>
              </div>
              <div className='description-div'>
                <p>{this.state.video.description}</p>
              </div>
            </div>
          </div>

          <div className='video-show-index'>
            <SideIndexContainer />
          </div>
        </div>
      </div>
    );
  };
};

export default VideoShow;
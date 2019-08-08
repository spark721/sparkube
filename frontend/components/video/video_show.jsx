
import React from 'react';
import NavTop from '../nav_top/nav_top';
import SideIndexContainer from './side_index_container';
import LikeDislike from './video_like_dislike';
import CommentFormContainer from './comment_form_container';
import CommentIndexContainer from './video_comment_container';
import { Link } from 'react-router-dom';


class VideoShow extends React.Component {
  
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      video: this.props.video,
    }
    // console.log(this.props.comments);
  }

  componentDidMount() {
    // debugger
    // if (this.state.video === undefined) {
      this.props.getVideo(this.props.match.params.videoId).then( result => {
        // console.log('result: ', result);
        this.setState({
          video: result.payload.video,
        });
      });
    // };
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    // debugger

    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      // this.setState({ video: this.props.video, });
      location.reload();
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

  render() {
    // video_show.jsx
    // debugger
    
    if (!this.state.video) {
      return (
        <div>Loading</div>
      );
    };

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

                <LikeDislike 
                  videoId={this.props.video.id}
                  likes={this.props.video.likes}  // likes count
                  dislikes={this.props.video.dislikes}  // dislikes count
                  currentUser={currentUser}
                  likeVideo={this.props.likeVideo}  // func
                  unlikeVideo={this.props.unlikeVideo}  // func
                  dislikeVideo={this.props.dislikeVideo}  // func
                  undislikeVideo={this.props.undislikeVideo}  // func
                  curUserLikes={this.props.video.cur_user_likes}  // bool
                  curUserDislikes={this.props.video.cur_user_dislikes}  // bool
                />

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

            {/* Comments section */}
            <CommentFormContainer
              videoId={this.props.video.id}
              currentUser={currentUser}
            />

            <CommentIndexContainer
              videoId={this.props.video.id}
              currentUser={currentUser}
            />
            
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
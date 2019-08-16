
import React from 'react'
// import NavTop from '../nav_top/nav_top';
import NavTopContainer from '../nav_top/nav_top_conatiner';
import SideBarContainer from '../sidebar/side_bar_container';



class VideoEditForm extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = this.props.video;
    // debugger

    this.update = this.update.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
    this.updatePoster = this.updatePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // debugger;
    this.setState({ loading: false });
    this.props.getVideo(this.props.video.id);
    this.props.clearErrors();
  }

  renderError() {
    return (
      <ul className="upload-errors">
        {this.props.errors.map((error, i) => {
          return (
            <li
              key={`error-${i}`}
              className="render-upload-error" >
              <i className="fas fa-exclamation-circle" id="upload-error-i"></i>
              {error}
            </li>
          );
        })}
      </ul>
    );
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  updateVideo(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ videoFile: file, videoURL: reader.result });
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  updatePoster(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ posterFile: file, posterURL: reader.result });
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateVideo(this.state).then(
      () => this.props.history.replace(`/watch/${this.state.id}`)
    );
  }

  render() {
    // debugger

    if (!this.props.video) {
      return (
        <div>Loading</div>
      );
    };

    // const previewVid = this.state.videoURL ?
    //   // <div>
    //   <video width="100%" controls>
    //     <source
    //       src={this.state.videoURL}
    //       type="video/mp4" />
    //   </video>
    //   // {/* <p>{this.state.videoFile.name}</p> */}
    //   // {/* </div> */}
    //   : <p>No video currently selected</p>;

    // const previewImg = this.state.posterURL ?
    //   // <div>
    //   <img src={this.state.posterURL} />
    //   // <p>{this.state.posterFile.name}</p>
    //   // </div>
    //   : <p>No thumbnail currently selected</p>;

    const nowLoading = this.state.loading ?

      <button className="upload-button"
        onClick={this.handleSubmit}
        disabled >
        <img src={window.loadingURL} alt="" />
      </button>
      :
      <button className="upload-button"
        onClick={this.handleSubmit} >
        <p>Done</p>
      </button>
      
    return (
      <div>

        <NavTopContainer />
        <div className="home-page">
          <SideBarContainer />
          <div className='upload-form-page'>
            <div className='upload-form-div'>

              <form className='upload-form'>
                <div className='video-poster'>
                  <div className="upload-mp4-div">
                    <label htmlFor="upload-mp4"
                      className="form-upload-icon">
                      <i className="fas fa-play-circle"></i>
                    </label>
                    {/* <input type="file"
                      id="upload-mp4"
                      accept="video/mp4"
                      onChange={this.updateVideo} /> */}

                    <div id="preview-vid">
                      <video width="100%" controls>
                        <source
                          src={this.state.videoUrl}
                          type="video/mp4" />
                      </video>
                      {/* {previewVid} */}
                      {/* <p>No File currently selected</p> */}
                    </div>
                  </div>

                  <div className="upload-img-div">
                    <label htmlFor="upload-img"
                      className="form-upload-icon">
                      <i className="fas fa-image"></i>
                    </label>
                    {/* <input type="file"
                      id="upload-img"
                      accept="image/png, image/jpeg"
                      onChange={this.updatePoster} /> */}

                    <div id="preview-img">
                      <img src={this.state.poster} />
                      {/* {previewImg} */}
                      {/* <p>No File currently selected</p> */}
                    </div>
                  </div>
                </div>

                <div className="title-desc">
                  <div className="upload-title-div">
                    <input type="text"
                      className="upload-title"
                      value={this.state.title}
                      // placeholder="Title"
                      onChange={this.update('title')} />
                  </div>

                  <div className="upload-desc-div">
                    <textarea className="upload-desc"
                      value={this.state.description}
                      // placeholder="Description"
                      onChange={this.update('description')} />
                  </div>

                  {this.renderError()}
                </div>

                {nowLoading}

              </form>

            </div>
          </div>
        </div>
        
      </div>
    );
  };
}

export default VideoEditForm;
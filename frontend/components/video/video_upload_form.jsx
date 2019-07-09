
import React from 'react';
import NavTop from '../nav_top/nav_top';


class VideoUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      videoFile: null,
      videoURL: null,
      posterFile: null,
      posterURL: null,
    };

    this.update = this.update.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
    this.updatePoster = this.updatePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[video_url]', this.state.videoFile);
    formData.append('video[poster]', this.state.posterFile);
    this.props.createVideo(formData).then(
      () => this.props.history.push('/')
    );
  };


  // componentDidMount() {
  //   let inputVid = document.getElementById('upload-mp4');
  //   let previewVid = document.getElementById('preview-vid');

  //   inputVid.addEventListener('change', updateVidDisplay);

  //   function updateVidDisplay() {
  //     while (previewVid.firstChild) {
  //       previewVid.removeChild(previewVid.firstChild);
  //     }

  //     const curVids = inputVid.files;
  //     let userVid = document.createElement('video');
  //     let vidSource = document.createElement('source');
  //     userVid.width = "280";
  //     userVid.controls = true;
  //     vidSource.type = "video/mp4";
  //     vidSource.src = window.URL.createObjectURL(curVids[0]);
  //     userVid.appendChild(vidSource);

  //     let paraV = document.createElement('p');
  //     paraV.textContent = curVids[0].name;

  //     previewVid.appendChild(userVid);
  //     previewVid.appendChild(paraV);
  //   }

  //   let inputImg = document.getElementById('upload-img');
  //   let previewImg = document.getElementById('preview-img');

  //   inputImg.addEventListener('change', updateImgDisplay);

  //   function updateImgDisplay() {
  //     while (previewImg.firstChild) {
  //       previewImg.removeChild(previewImg.firstChild);
  //     }

  //     const curImgs = inputImg.files;
  //     let userImg = document.createElement('img');
  //     userImg.src = window.URL.createObjectURL(curImgs[0]);

  //     let paraI = document.createElement('p');
  //     paraI.textContent = curImgs[0].name;

  //     previewImg.appendChild(userImg);
  //     previewImg.appendChild(paraI);
  //   }
  // }

  render() {
    // console.log(this.state);

    const previewVid = this.state.videoURL ?
      // <div>
        <video width="100%" controls>
          <source
            src={this.state.videoURL}
            type="video/mp4" />
        </video>
        // {/* <p>{this.state.videoFile.name}</p> */}
      // {/* </div> */}
      : <p>No File currently selected</p>;

    const previewImg = this.state.posterURL ?
      // <div>
        <img src={this.state.posterURL} />
        // <p>{this.state.posterFile.name}</p>
      // </div>
      : <p>No File currently selected</p>;

    
    return(
      <div>
        <NavTop />
        <div className='upload-form-page'>
          <div className='upload-form-div'>

            <form className='upload-form'
                  onSubmit={this.handleSubmit} >
              <div className="upload-mp4-div">
                <label htmlFor="upload-mp4"
                       className="form-upload-icon">
                  <i className="fas fa-play-circle"></i>
                </label>
                <input type="file"
                       id="upload-mp4"
                       accept="video/mp4"
                       onChange={this.updateVideo} />

              <div id="preview-vid">
                {previewVid}
                {/* <p>No File currently selected</p> */}
              </div>
              </div>

              <div className="upload-img-div">
                <label htmlFor="upload-img"
                       className="form-upload-icon">
                  <i className="fas fa-image"></i>
                </label>
                <input type="file"
                       id="upload-img"
                       accept="image/png, image/jpeg"
                       onChange={this.updatePoster} />

                <div id="preview-img">
                  {previewImg}
                  {/* <p>No File currently selected</p> */}
                </div>
              </div>

              <div className="upload-title-div">
                <input type="text"
                       className="upload-title"
                       value={this.state.title}
                       placeholder="Title"
                       onChange={this.update('title')} />
              </div>

              <div className="upload-desc-div">
                <textarea className="upload-desc"
                          rows="6"
                          placeholder="Description" ></textarea>
              </div>
              
            </form>

          </div>
        </div>
      </div>
    );
  };
};

export default VideoUploadForm;
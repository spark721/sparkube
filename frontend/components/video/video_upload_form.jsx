
import React from 'react';
import NavTop from '../nav_top/nav_top';


class VideoUploadForm extends React.Component {

  render() {
    // let inputVideo = document.getElementById('input')
    // inputVideo.addEventListener('change', updateImageDisplay);
    // function updateImageDisplay() {

    // }

    return(
      <div>
        <NavTop />
        <div className='upload-form-page'>
          <div className='upload-form-div'>
            <form className='upload-form'>
              <div className="upload-mp4-div">
                <label htmlFor="upload-mp4"
                       className="form-upload-icon">
                  <i className="fas fa-play-circle"></i>
                </label>
                <input type="file"
                       id="upload-mp4"
                       accept="video/mp4" />
                       
              </div>

              
              <div className="upload-img-div">
                <label htmlFor="upload-img"
                       className="form-upload-icon">
                  <i className="fas fa-image"></i>
                </label>
                <input type="file"
                       id="upload-img"
                       accept="image/png, image/jpeg" />
              </div>

              
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default VideoUploadForm;
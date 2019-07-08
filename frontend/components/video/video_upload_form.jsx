
import React from 'react';
import NavTop from '../nav_top/nav_top';


class VideoUploadForm extends React.Component {

  render() {
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
                       accept=".mp4" />
                       
              </div>

              
              <div className="upload-img-div">
                <label htmlFor="upload-img"
                       className="form-upload-icon">
                  <i className="fas fa-image"></i>
                </label>
                <input type="file"
                       id="upload-img"
                       accept=".png,.jpg" />
              </div>

              
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default VideoUploadForm;
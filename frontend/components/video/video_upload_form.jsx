
import React from 'react';
import NavTop from '../nav_top/nav_top';


class VideoUploadForm extends React.Component {

  componentDidMount() {
    let inputVid = document.getElementById('upload-mp4');
    let previewVid = document.getElementById('preview-vid');

    inputVid.addEventListener('change', updateVidDisplay);

    function updateVidDisplay() {
      while (previewVid.firstChild) {
        previewVid.removeChild(previewVid.firstChild);
      }

      const curVids = inputVid.files;
      let userVid = document.createElement('video');
      let vidSource = document.createElement('source');
      userVid.width = "280";
      userVid.controls = true;
      vidSource.type = "video/mp4";
      vidSource.src = window.URL.createObjectURL(curVids[0]);
      userVid.appendChild(vidSource);

      let paraV = document.createElement('p');
      paraV.textContent = curVids[0].name;

      previewVid.appendChild(userVid);
      previewVid.appendChild(paraV);
    }

    let inputImg = document.getElementById('upload-img');
    let previewImg = document.getElementById('preview-img');

    inputImg.addEventListener('change', updateImgDisplay);

    function updateImgDisplay() {
      while (previewImg.firstChild) {
        previewImg.removeChild(previewImg.firstChild);
      }

      const curImgs = inputImg.files;
      let userImg = document.createElement('img');
      userImg.src = window.URL.createObjectURL(curImgs[0]);
      
      let paraI = document.createElement('p');
      paraI.textContent = curImgs[0].name;

      previewImg.appendChild(userImg);
      previewImg.appendChild(paraI);
    }

  }

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
                       accept="video/mp4" />

              <div id="preview-vid">
                <p>No File currently selected</p>
              </div>
              </div>

              <div className="upload-img-div">
                <label htmlFor="upload-img"
                       className="form-upload-icon">
                  <i className="fas fa-image"></i>
                </label>
                <input type="file"
                       id="upload-img"
                       accept="image/png, image/jpeg" />

                <div id="preview-img">
                  <p>No File currently selected</p>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default VideoUploadForm;
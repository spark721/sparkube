
import React from 'react';
import SideIndexItem from './side_index_item';

class SideIndex extends React.Component {

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    let videos = this.props.videos.map((video, i) => {
        return <SideIndexItem
          key={i}
          video={video} />;
    });

    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    return (
      <div className='side-index-splash-whole'>
        <div className='side-index-splash'>
          <ul className='side-index-splash-ul'>{shuffle(videos)}</ul>
        </div>
      </div>
    );
  };
};

export default SideIndex;
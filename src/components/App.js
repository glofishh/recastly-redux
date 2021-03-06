
import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

import changeVideo from '../actions/currentVideo';
import changeVideoList from '../actions/videoList';

import SearchContainer from '../containers/SearchContainer.js'
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js'
import VideoListContainer from '../containers/VideoListContainer.js'
import store from '../store/store.js';
import handleVideoSearch from '../actions/search.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   videos: [],
    //   currentVideo: null
    // };

    // this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  componentDidMount() {
    store.dispatch(changeVideo(exampleVideoData[0]));
    store.dispatch(changeVideoList(exampleVideoData));//initial state
    // this.getYouTubeVideos('react tutorials');
  }

  // handleVideoListEntryTitleClick(video) {
  //   this.setState({currentVideo: video});
  // }

  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.API_KEY,
  //     query: query
  //   };

  //   this.props.searchYouTube(options, (videos) =>
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     })
  //   );
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

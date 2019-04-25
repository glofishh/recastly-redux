import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import ReduxThunk from 'redux-thunk';

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
  };
}
const  mapDispatchToProps = (dispatch) => ({ });

var VideoPlayerContainer =connect(mapStateToProps,mapDispatchToProps)(VideoPlayer)


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;

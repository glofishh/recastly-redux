import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// handleVideoListEntryTitleClick
const mapStateToProps = (state) => {
  return {
    videos: state.videoList,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick:(video)=>{dispatch(changeVideo(video))}
  }
}
const VideoListContainer =
  connect(mapStateToProps,mapDispatchToProps)(VideoList)
;

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
// var mapStateToProps=state=>({ });
// var mapDispatchToProps=dispatch=>{
//   return {
//     handleSearchInputChange:(video)=>{dispatch(handleSearchChange(video))}
//   }
// }
// var SearchContainer = connect(mapStateToProps,mapDispatchToProps)(Search)

// //TODO: define a SearchContainer component which will hook up your action
// // dispatchers with your search component props.
// //HINT: use react-redux 'connect' method to generate a container component from
// //state and dispatch mappings.

// export default SearchContainer;
// // connect() Parameters
// // connect accepts four different parameters, all optional. By convention, they are called:

// // mapStateToProps?: Function
// // mapDispatchToProps?: Function | Object
// // mergeProps?: Function
// // options?: Object
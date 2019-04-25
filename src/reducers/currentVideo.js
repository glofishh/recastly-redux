import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js'

var currentVideoReducer = (state=null, action) => {
  switch(action.type){
    case 'CHANGE_VIDEO':
      return action.video
    default:
      return state;
  }

  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
// //function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

// var changeVideo = (video) => ({
//   //TODO:  Return some action object to change the currently playing video.
//   type: 'CHANGE_VIDEO',
//   video: video,

// });
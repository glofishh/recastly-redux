import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch(action.type){
    case'CHANGE_VIDEO_LIST':
      return action.videos
    default:
      return state;
  }
};

export default videoListReducer;

// var currentVideoReducer = (state=null, action) => {
//   switch(action.type){
//     case 'CHANGE_VIDEO':
//       return action.video
//     default:
//       return state;
//   }

//   //TODO: define a reducer for the currentVideo field of our state.
// };

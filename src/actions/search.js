import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  // return _.debounce((dispatch)=>{
  //   var state={
  //     key:YOUTUBE_API_KEY,
  //     query:q,
  //     max:5
  //   }
  //   searchYouTube(state,(videos)=>{
  //     console.log('i got called')
  //     dispatch(changeVideoList(videos))
  //     dispatch(changeVideo(videos))
  //     123
  //   })
  // },100);
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (input) => {
      dispatch(changeVideoList(input));
      dispatch(changeVideo(input[0]))
    });
  };
};



export default handleVideoSearch;

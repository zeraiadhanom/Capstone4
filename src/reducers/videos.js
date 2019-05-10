import { REQUEST_VIDEOS, SELECT_VIDEO } from '../actions/actionType';


export default function(state = {}, action) {
  switch(action.type) {
    case REQUEST_VIDEOS:
      return { ...state, 
        selectedVideo: action.payload.selectedVideo, 
        videos: action.payload.videos
       };
    case SELECT_VIDEO:
      return { ...state, selectedVideo: action.payload };
  }
    return state;
}


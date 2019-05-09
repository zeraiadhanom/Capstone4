
import YTSearch from 'youtube-api-search'
import {REQUEST_VIDEOS, SELECT_VIDEO} from './actionType'



//const API_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
const API_KEY = 'AIzaSyBYhtoV6rW9kAGuxUPuFaYlK6JVRppseY4'
//const type = '&type=video&key='

export const requestVideos = (term) => (dispatch) => {
    YTSearch({key: API_KEY, term}, videos => {
        const payload = {
            videos,
            selectedVideo: videos[0]
        }
        dispatch({type: REQUEST_VIDEOS, payload})
    })
}

export function selectVideo(video) {
    return { type: SELECT_VIDEO, payload: video}
}

//https://github.com/sakoh/react-redux-youtube-player/blob/master/src/components/video_player.js

import YTsearch from 'youtube-api-search'
import axios from 'axios';
import request from 'superagent';

const API_KEY = 'AIzaSyBYhtoV6rW9kAGuxUPuFaYlK6JVRppseY4'


export const FETCH_VIDEO_PENDING = 'FETCH_VIDEO_PENDING';
export const FETCH_VIDEO_SUCCESS = 'FETCH_VIDEO_SUCCESS';
export const FETCH_VIDEO_ERROR = 'FETCH_VIDEO_ERROR';


function fetchVideoPending() {
   return {
    type: FETCH_VIDEO_PENDING
  }
}


/* function fetchVideoSuccess(videos) {
  return {
    type: FETCH_VIDEO_SUCCESS,
    videos: videos
  }
} */


function fetchVideoError(error) {
   return {
     type:FETCH_VIDEO_ERROR,
     error: error 
   }
}

const API_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3VyA8KN_VgCF93EurnAQXw&key=';


export function fetchVideoSuccess(term = null) {
  const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

  return {
    type: FETCH_VIDEO_SUCCESS,
    payload: data
  }
}




import request from 'superagent';

export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';

const API_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
const API_KEY = 'AIzaSyBYhtoV6rW9kAGuxUPuFaYlK6JVRppseY4'
const type = '&type=video&key='

export function requestVideos(term = null) {
    return function(dispatch) {
        request.get(`${API_URL}${term.replace(/\s/g, '+')}${type}${API_KEY}`).then(response => {
            dispatch({
                type: REQUEST_VIDEOS,
                payload: response
            });
        });
    }
}



//https://www.googleapis.com/youtube/v3/search?part=snippet&q=swimming&type=video&key=AIzaSyBYhtoV6rW9kAGuxUPuFaYlK6JVRppseY4



import { REQUEST_VIDEOS } from '../actions';

const initialState =  {
  data: []
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case REQUEST_VIDEOS:
      return {
        ...state, data: action.payload.body.data
      };
    default:
      return state;
  }
}
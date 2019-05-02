import { REQUEST_VIDEOS } from '../actions';

const initialState =  {
  data: []
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case REQUEST_VIDEOS:
    console.log(action.payload)
      return {
        ...state, data: action.payload.body.items
      };
    default:
      return state;
  }
}
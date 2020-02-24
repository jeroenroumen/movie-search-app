import {GET_MOVIES, MOVIES_ERROR, SET_LOADING} from '../actions/types';

const initialState = {
  movies: null,
  loading: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case MOVIES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

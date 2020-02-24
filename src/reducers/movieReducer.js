import { GET_MOVIES, SET_LOADING } from '../actions/types';

const initialState = {
  movies: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        state,
        movies: action.payload,
        loading: false
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

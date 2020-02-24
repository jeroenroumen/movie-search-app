import {
  GET_MOVIES,
  SET_LOADING,
  MOVIES_ERROR
} from './types';

// Get now running movies
export const getRunningMovies = () => async dispatch => {
  try {
    setLoading();

    const res = fetch(`/now_running?api_key=${process.env.REACT_APP_TMDB_CLIENT_SECRET}`);
    const data = res.json();

    dispatch({
      type: GET_MOVIES,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MOVIES_ERROR,
      payload: error.response.status
    })
  }
};

// Set loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
};
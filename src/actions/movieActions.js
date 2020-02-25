import {
  GET_MOVIES,
  SET_LOADING,
  MOVIES_ERROR
} from './types';

const baseUrl = "https://api.themoviedb.org/3/movie";

// Get now running movies
export const searchMovies = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`${baseUrl}/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&region=CZ`);
    const data = await res.json();

    console.log(data);

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

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
};

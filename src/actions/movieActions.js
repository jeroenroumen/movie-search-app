import {
  GET_MOVIES,
  SET_LOADING,
  MOVIES_ERROR
} from './types';

const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`;

// Get now running movies
export const searchMovies = (text, page) => async dispatch => {
  try {
    setLoading();

    let data;
    
    if (text !== '') {
      const res = await fetch(`${baseUrl}&query=${text}&page=${page}`);
      data = await res.json();
    } else {
      data = {
        results: []
      }
    }

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

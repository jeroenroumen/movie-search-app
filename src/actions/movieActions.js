import {
  GET_MOVIES,
  SET_LOADING
} from './types';

// Get now running movies
export const getRunningMovies = () => async dispatch => {
  try {
    setLoading();

  } catch (error) {

  }
};

// Set loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
};
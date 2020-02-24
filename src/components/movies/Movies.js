import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../actions/movieActions';

const Movies = ({ searchMovies, movie: { movies, loading, page } }) => {

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <p>Test</p>
  )

};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, { searchMovies })(Movies);

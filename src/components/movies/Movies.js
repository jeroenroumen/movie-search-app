import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchMovies } from '../../actions/movieActions';
import Preloader from '../layout/Preloader';
import MovieItem from './MovieItem';

const Movies = ({ searchMovies, movie: { movies, loading } }) => {

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line
  }, []);

  if (loading || movies === null) {
    return <Preloader />
  }

  return (
    <Fragment>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Movies</h4>
        </li>
        {!loading && movies.length === 0 ? (
            <p className="center">No movies to show. Do a search!</p>
          ) :
          (
            movies.map(movie => <MovieItem key={movie.id} movie={movie} />)
          )}
      </ul>
    </Fragment>
  )
};

Movies.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, { searchMovies })(Movies);

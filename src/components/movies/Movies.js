import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../actions/movieActions';
import Preloader from '../layout/Preloader';
import MovieItem from './MovieItem';

const Movies = ({ searchMovies, movie: { movies, loading, page } }) => {

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line
  }, []);

  if (loading || movies === null) {
    return <Preloader />
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Movies</h4>
      </li>
      {!loading && movies.length === 0 ? (
          <p className="center">No movies to show...</p>
        ) :
        (
          movies.map(movie => <MovieItem movie={movie} />)
        )}
    </ul>
  )

};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, { searchMovies })(Movies);

import React from 'react';
import { connect } from 'react-redux';

const Pagination = ({ loading, movie: { movies, page, total_pages } }) => {

  if (!loading && movies.length !== 0) {
    return (
      <ul className="pagination center">
        <li className={page === 1 ? 'disabled' : 'waves-effect'}><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        <span>{(movies.length * page - movies.length) + 1} - {movies.length * page} of {total_pages * movies.length}</span>
        <li className={page === total_pages ? 'disabled' : 'waves-effect'}><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
    )
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, null)(Pagination);

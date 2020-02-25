import React from 'react';
import { connect } from 'react-redux';

const Pagination = ({ loading, movie: { movies, page, total_pages } }) => {

  if (!loading && movies.length !== 0) {
    return (
      <ul className="pagination center">
        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        <span>{(movies.length * page - movies.length) + 1} - {movies.length * page} of {total_pages * movies.length}</span>
        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
    )
  } else {
    return <span>{' '}</span>
  }

  // let pageNumbers = [];
  //
  // if (!loading && total_pages !== null) {
  //   for (let i = 1; i <= total_pages; i++) {
  //     pageNumbers.push(i);
  //   }
  // }

  // return (
  //   <ul className="pagination">
  //     {pageNumbers.map(number => (
  //       <li key={number}
  //           className={ page === number ? 'active blue' : 'waves-effect' }>
  //         <a href="#!">{number}</a>
  //       </li>
  //     ))}
  //   </ul>
  // )
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, null)(Pagination);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Pagination = ({ loading, movie: { page, total_pages } }) => {

  let pageNumbers = [];

  if (!loading && total_pages !== null) {
    for (let i = 1; i <= total_pages; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number}
            className={ page === number ? 'active blue' : 'waves-effect' }>
          <a href="#!">{number}</a>
        </li>
      ))}
    </ul>
  )
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, null)(Pagination);
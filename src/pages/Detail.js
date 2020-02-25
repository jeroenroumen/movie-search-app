import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions/movieActions';

const Detail = ({ match, getMovie, movie: { movie } }) => {

  useEffect(() => {
    getMovie(match.params.id);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="container">
        <p>test</p>
      </div>
    </Fragment>
  )
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, { getMovie })(Detail);

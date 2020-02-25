import React, { Fragment, useRef } from 'react';
import { connect } from 'react-redux';
import Movies from '../components/movies/Movies';
import Pagination from '../components/movies/Pagination';
import { searchMovies } from '../actions/movieActions';
import styled from 'styled-components';

const Home = ({ searchMovies }) => {

  const text = useRef('');

  const onChange = (page = 1) => {
    searchMovies(text.current.value, page);
  };

  const handlePagination = pageNumber => {
    onChange(pageNumber);
  };

  return (
    <Fragment>
      <div className="container">
        <div>
          <form>
            <input
              id="search"
              type="search"
              placeholder="Search movies..."
              ref={text}
              onChange={onChange} />
          </form>
          <Button className="blue">Clear</Button>
        </div>
        <Movies />
        <Pagination click={handlePagination} />
      </div>
    </Fragment>
  )
};

const Button = styled.button`
    display: inline-block;
    color: #FFFFFF;
    padding: 0.4rem 2.3rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
    display: block;
    width: 100%;
`;

export default connect(null, { searchMovies })(Home);

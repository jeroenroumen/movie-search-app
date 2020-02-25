import React, { Fragment } from 'react';
import Movies from '../components/movies/Movies';
import Search from '../components/movies/Search';
import Pagination from '../components/movies/Pagination';

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <Search />
        <Movies />
        <Pagination />
      </div>
    </Fragment>
  )
};

export default Home;
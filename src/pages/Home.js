import React, { Fragment } from 'react';
import Search from '../components/movies/Search';
import Movies from '../components/movies/Movies';

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <Search />
        <Movies />
      </div>
    </Fragment>
  )
};

export default Home;
import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SearchBar from './components/layout/SearchBar';
import Movies from './components/movies/Movies';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';

const App = () => {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <Movies />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;

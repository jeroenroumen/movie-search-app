import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';

const App = () => {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <div className="App">
        <p>Test</p>
      </div>
    </Provider>
  );
};

export default App;

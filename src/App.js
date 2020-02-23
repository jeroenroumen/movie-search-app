import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';

function App() {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <p>Test</p>
    </div>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './atoms/main.scss';
import ActionButtons from './molecules/actionButtons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <ActionButtons></ActionButtons>
      </header>
    </div>
  );
}

export default App;

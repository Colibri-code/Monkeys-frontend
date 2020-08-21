import React from 'react';
// import logo from './logo.svg';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './components/atoms/main.scss';
import Example from './examples/examples';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Example></Example>
      </header>
    </div>
  );
}

export default App;

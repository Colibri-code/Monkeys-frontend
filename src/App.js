import React from 'react';
// import logo from './logo.svg';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './atoms/main.scss';
import Example from './examples/examples';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Content from "./containers/content";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;

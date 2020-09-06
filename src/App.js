import React from "react";
import "./sass/main.scss";
import Router from "./containers/router";
import Store from "./store"

function App() {
  return (
    <Store>
      <Router></Router>
    </Store>
  );
}

export default App;

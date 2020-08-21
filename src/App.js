import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
import './sass/main.scss';
import AuthContext from './auth/context';
import Example from './examples/examples';
import Login from './pages/login';

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{ user, setUser, loading }}>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Example} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

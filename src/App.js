import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
import './sass/main.scss';
import { useAuthContext } from './auth/context';
import Navbar from './components/navbar/index';
import Sidebar from './components/sidebar/index';
import Example from './examples/examples';
import Login from './pages/login';
import Project from './pages/project';

function App() {
  const [{ user }] = useAuthContext();
  return (
    <BrowserRouter>
      <Switch>
        <>
          <div className='container'>
            {!user ? (
              <Route exact path='/' component={Login} />
            ) : (
              <div className='main-content'>
                <Navbar />
                <Sidebar />
                <div className='app'>
                  <Route exact path='/' component={Project} />
                </div>
              </div>
            )}
          </div>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

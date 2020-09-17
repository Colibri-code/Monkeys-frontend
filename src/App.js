import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
import DetailEnviroment from './pages/detailEnviroment';
import Header from './components/header';
import Login from './pages/login';
import Project from './pages/project';
import Sidebar from './components/sidebar/index';
import { useAuthContext } from './auth/context';

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
                <Header />
                <Sidebar />
                <div className='app'>
                  <Route exact path='/' component={Project} />
                  <Route
                    exact
                    path='/detail-enviroment'
                    component={DetailEnviroment}
                  />
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

import React, {useEffect} from 'react';
// import $ from 'jquery';
// import Popper from 'popper.js';
import Router from './containers/router';
import Axios from 'axios';


function App() {
  useEffect(()=> {
    getData();
  }, []);

  const getData = async () => {
    const data = await Axios('http://localhost:1337/user/read/1');
    console.log('Esta es la prueba de backend con frontend', data);
  };

  return <Router />;
}

export default App;

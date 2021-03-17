import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return(
    <>
      <Route component = {LoginPage} path = "/login" exact/>
      <Route component = {RegisterPage} path = "/register"/> 
    </>
  );
}

export default App;

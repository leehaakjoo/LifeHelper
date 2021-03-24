import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import UserInfoPage from './pages/UserInfoPage';
const App = () => {
  return(
    <>
      <Route component = {MainPage} path = "/" exact/>
      <Route component = {LoginPage} path = "/login"/>
      <Route component = {RegisterPage} path = "/register"/> 
      <Route component = {UserInfoPage} path ="/userinfo"/>
    </>
  );
}

export default App;

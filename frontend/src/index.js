import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer, {rootSaga} from './modules';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { tempSetUser,check } from './modules/userStataus';

function loadUserstatus(){ //index에서 로그인 정보 유지할 수 있도록 한다.
  try{
    const userstatus = localStorage.getItem('userstatus');
    console.log('userstatus', userstatus);
    if(!userstatus) return;
    store.dispatch(tempSetUser(userstatus));
    store.dispatch(check());
  } catch (e){
    console.log('localStorage is not working');
  }
}
const reduxSaga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxSaga)));

reduxSaga.run(rootSaga);
loadUserstatus();
ReactDOM.render(
  <Provider store= {store}>  
   <BrowserRouter>
      <App />
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);


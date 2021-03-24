import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './Containers/reportWebVitals';
import{BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose, combineReducers} from 'redux'
import{Provider} from 'react-redux'
import reducer_BurgerBuilder from './Store/Reducers/reducer_BurgerBuilder'
import reducer_Orders from './Store/Reducers/reducer_order'
import AuthReducer from './Store/Reducers/AuthReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  burgerBuilder : reducer_BurgerBuilder,
  orders:reducer_Orders,
  auth:AuthReducer
})
//second arg in store for redux devtool

const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
))


const app =(
  <Provider store={store}><BrowserRouter>
  <App/>
  </BrowserRouter></Provider>
  
)
ReactDOM.render(
  
  <React.StrictMode>
    {app}
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import counterReducer from "./redux/counter"
// import reportWebVitals from './reportWebVitals';
// import "../node_modules/boostrap/z"
let store = configureStore({
  // this reuducer detarmine what you want to do with the store
  reducer:{counterReducer}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
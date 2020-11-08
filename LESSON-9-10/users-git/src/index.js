import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';


import configureStore from "./store/configureStore";
import AppRedux from "./components/AppRedux";

const store = configureStore(AppRedux);
const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  rootElement
)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter, Switch, Route, useLocation } from 'react-router-dom'

import Item from './components/item'

import ReactGA from 'react-ga4';
ReactGA.initialize('G-T73VSEE6FN');
// ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
  <HashRouter >
    <Switch>
      <Route path={`/item/:itemid`} component={() => <Item />} />
      <Route                        component={() => <App />} />
    </Switch>
  </HashRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

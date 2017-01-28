import React from 'react';
import { render } from 'react-dom';
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './containers/Main';
import Home from './components/Home';
console.log("HOME", Home)
render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('app'));

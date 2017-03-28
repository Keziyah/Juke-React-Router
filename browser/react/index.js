import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer} />
  </Router>,
  document.getElementById('app')
);

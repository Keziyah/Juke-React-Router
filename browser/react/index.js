import React from 'react';
import {Router, Route,IndexRedirect, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from'./components/Albums';
import Album from './components/Album'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to='albums' />
    <Route path="/albums" component ={Albums} />
    <Route path="albums/:albumId" component={Album} />
    </Route>
  </Router>,
  document.getElementById('app')
);

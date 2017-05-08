import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router'

import App from './App'
import Main from './containers/Main'
import Contact from './containers/Contact'
import NoMatch from './containers/NoMatch'

//browserHistory = browser back forward
//history apifallback in webpack server
//server-side rendering is required

ReactDOM.render((
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Main}/>
        <Route path="/contact" component={Contact}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Router>
), document.getElementById('root'));
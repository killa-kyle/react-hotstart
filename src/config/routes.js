import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import Detail from '../components/Detail'


var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path='detail' component={Detail} />
    </Route>
  </Router>
);
export default routes;
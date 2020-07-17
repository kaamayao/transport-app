import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './containers/homepage/homepage.js'
import AverageTime from './containers/averagetime/averagetime.js'
import ReportTime from './containers/reporttime/reporttime.js'

const ROUTING = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/report" component={ReportTime} />
      <Route path="/averagetime" component={AverageTime} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(ROUTING, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import store from './components/store';
import CarsIndex from './containers/carsIndex';

import '../assets/stylesheets/application.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <CarsIndex />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

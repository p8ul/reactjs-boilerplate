import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import indexRoutes from './routes/index';
import { store } from './redux/store';
import './assets/styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {indexRoutes.map((route, key) => (
          <Route exact path={route.path} component={route.component} key={key} />
        ))}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

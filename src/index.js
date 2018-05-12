import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import { Home, Count, Custom } from './pages';
// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

var ghProjectName = window.location.pathname.split('/')[1];

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path={`/${ghProjectName}/count`} component={Count} />
        <Route path={`/${ghProjectName}/:path`} component={Custom} />
        <Route path={`/${ghProjectName}`} component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')
);
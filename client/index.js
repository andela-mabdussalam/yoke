import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Greet from './components/Greet';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import routes from './routes';
import './styles/style.css';

render(
  <Provider store={store}>
  <Router>
  <App>
  <Route exact path="/" component={Greet} />
  </App>
  </Router>
  </Provider>, document.getElementById('app')
);


import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Greet from './components/Greet';
import { IndexRoute } from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import routes from './routes';
import './styles/style.css';

render(
  <Router>
  <App>
  <Route exact path="/" component={Greet} />
  </App>

  </Router>, document.getElementById('app'));

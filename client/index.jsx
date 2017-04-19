import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import LandingPage from './components/LandingPage';
import configureStore from './store/configureStore';
import SignupPage from './components/SignupPage';
import './styles/style.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignupPage} />
      </App>
    </Router>
  </Provider>, document.getElementById('app')
);


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Greet from './components/Greet';
import configureStore from './store/configureStore';
import SignupPage from './components/SignupPage';
import './styles/style.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={Greet} />
        <Route path="/signup" component={SignupPage} />
      </App>
    </Router>
  </Provider>, document.getElementById('app')
);


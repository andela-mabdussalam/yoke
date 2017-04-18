import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <NavigationBar />
      {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

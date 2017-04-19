import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <NavigationBar />
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.array.isRequired
};

export default App;

import React from 'react';
import NavigationBar from './NavigationBar';
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <NavigationBar />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';

export default () => {
return(
<nav className="navbar navbar-custom">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">YOKE</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
);
}

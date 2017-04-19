import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
<nav className="navbar navbar-custom">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">YOKE</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/signup"><span className="glyphicon glyphicon-user" /> Sign Up</Link></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
    </ul>
  </div>
</nav>
);

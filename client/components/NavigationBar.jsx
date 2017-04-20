import React from 'react';

import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-toggleable-md navbar-light navbar-custom">
    <button className="navbar-toggler navbar-toggler-right" type="button"
      data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <Link to="/">
      <span className="navbar-brand" href="#">YOKE</span>
    </Link>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/">
            <span className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
            </span>
          </Link>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="extra">
          <Link to="/signup">
            <i className="fa fa-user-o icon" aria-hidden="true" />
            Sign Up
          </Link>
        </li>
        <li>
          <span href="#"><i className="fa fa-sign-in icon"
            aria-hidden="true"/>Login
          </span>
        </li>
      </ul>
    </div>
  </nav>
);

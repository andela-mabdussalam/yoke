import React from 'react';

export default () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbar-custom">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">YOKE</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="extra"><a href="#"><i className="fa fa-user-o icon" aria-hidden="true"></i>Sign Up</a></li>
          <li><a href="#"><i className="fa fa-sign-in icon" aria-hidden="true"></i>Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

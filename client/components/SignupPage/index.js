import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { signupRequest } from '../../actions/signupActions';

class SignupPage extends Component {
  render() {
    const { signupRequest } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignupForm signupRequest={signupRequest}/>
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  signupRequest: PropTypes.func.isRequired
};

export default connect(null, { signupRequest })(SignupPage);

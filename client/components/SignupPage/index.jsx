import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm.jsx';
import { signupRequest } from '../../actions/signupActions';

class SignupPage extends Component {
  render() {
    const { signupReq } = this.props;
    return (
      <div className="container">
        <div className="row" >
          <div className="col-md-4" style={{ margin: '0 auto', marginTop: '7%' }}>
            <SignupForm signupRequest={signupReq}/>
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  signupReq: PropTypes.func.isRequired
};

export default connect(null, { signupRequest })(SignupPage);

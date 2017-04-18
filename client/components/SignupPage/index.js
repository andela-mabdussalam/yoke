import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  signupRequest: React.propTypes.func.isRequired
};

export default connect((state) => ({}), { signupRequest })(SignupPage);

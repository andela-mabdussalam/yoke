import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
   // adress issue with client side validation
    if (this.isValid) {
      this.setState({ errors: {}, isLoading: true });
      this.props.signupRequest(this.state).then(
        () => { },
        err => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>

        <InputTemplate
          error={errors.username}
          label="Firstname"
          onChange={this.onChange}
          value={this.state.firstname}
          field="firstname"
        />

        <InputTemplate
          error={errors.username}
          label="Lastname"
          onChange={this.onChange}
          value={this.state.lastname}
          field="lastname"
        />

        <InputTemplate
          error={errors.username}
          label="Date of Birth"
          onChange={this.onChange}
          value={this.state.dob}
          field="dob"
        />

        <InputTemplate
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.email}
          field="email"
        />

        <InputTemplate
          error={errors.password}
          label="Date of Birth"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />

        <InputTemplate
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary outline">Signup</button>
        </div>
      </form>
    );
  }
}

ProfilePage.propTypes = {
  signupRequest: PropTypes.func.isRequired
};

export default ProfilePage;

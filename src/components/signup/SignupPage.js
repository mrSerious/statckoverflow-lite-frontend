import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { signupRequest } from '../../actions/signupActions';

export class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirm_password: ''
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { signup, history } = this.props;

    signup({ ...this.state });
    setTimeout(() => history.push('/login'), 6000);
  };

  render() {
    const {
      email, firstname, lastname, username, password, confirm_password
    } = this.state;
    return (
      <div className="site-content">
        <div className="container">
          <div className="signup-area">
            <div className="signup-form">
              <div className="heading-text center-text">
                <h2 className="">Create your account. It's free and only takes a minute.</h2>
                <p className="no-margin">
                  Or
                  {' '}
                  <b><NavLink to="/login">login</NavLink></b>
                  {' '}
                  if you already have an account.
                </p>
              </div>
              <form id="signup" action="" method="post" onSubmit={this.handleFormSubmit}>
                <div className="row">
                  <div className="form-group">
                    <div className="half column">
                      <label htmlFor="male">First Name</label>
                      <input type="text" name="firstname" id="firstname" value={firstname} onChange={this.handleChange} required />
                    </div>
                    <div className="half column">
                      <label htmlFor="male">Last Name</label>
                      <input type="text" name="lastname" id="lastname" value={lastname} onChange={this.handleChange} required />
                    </div>
                    <div className="half column">
                      <label htmlFor="male">Username</label>
                      <input type="text" name="username" id="username" value={username} onChange={this.handleChange} required />
                    </div>
                    <div className="half column">
                      <label htmlFor="male">Email</label>
                      <input type="email" name="email" id="email" value={email} onChange={this.handleChange} required />
                    </div>
                    <div className="half column">
                      <label htmlFor="male">Password</label>
                      <input type="password" name="password" id="password" value={password} onChange={this.handleChange} required />
                    </div>
                    <div className="half column">
                      <label htmlFor="male">Confirm Password</label>
                      <input type="password" name="confirm_password" id="confirm_password" value={confirm_password} onChange={this.handleChange} required />
                    </div>
                    <div className="one column">
                      <button id="signup_button" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* /.signin-form */}
          </div>
          {/* /.signin-area */}
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: propTypes.instanceOf(Object).isRequired,
  signup: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.signup.error,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);

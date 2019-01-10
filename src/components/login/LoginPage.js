import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { loginRequest } from '../../actions/loginActions';
import Loader from '../common/Loader';

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();
    const { login, history } = this.props;
    await login({ ...this.state });
    setTimeout(() => {
      history.push('/');
    }, 6000);
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loader />;
    }
    const { email, password } = this.state;
    return (
      <div className="site-content">
        <div className="container">
          <div className="signin-area">
            <div className="signin-form">
              <div className="heading-text center-text">
                <h2 className="">Sign In To Your Account</h2>
                <p className="no-margin">
                  Or
                  {' '}
                  <b><NavLink to="/signup">register</NavLink></b>
                  {' '}
                  if you do not have an account.
                </p>
              </div>
              <form id="login" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="male">Email</label>
                  <input type="email" name="email" id="email" value={email} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="male">Password</label>
                  <input type="password" name="password" id="password" value={password} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <button type="submit">Submit</button>
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

LoginPage.propTypes = {
  login: propTypes.func.isRequired,
  history: propTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginRequest(user)),
});

const mapStateToProps = state => ({
  error: state.login.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

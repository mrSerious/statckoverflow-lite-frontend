import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import avatar from '../../../../public/images/avatar.jpg';
import SearchForm from './SearchForm';
import main from '../../../../public/js/main';
import { logoutRequest } from '../../../actions/loginActions';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.logOutUser = this.logOutUser.bind(this);
  }

  componentDidMount() {
    main();
  }

  logOutUser() {
    const { logOutAction } = this.props;
    logOutAction();
    localStorage.clear();
    return toastr.success('Goodbye! Come back soon');
  }

  render() {
    const { loggedIn, history } = this.props;
    return (
      <section className="navigation">
        <div className="nav-container">
          {/* navbrand */}
          <div className="brand">
            <NavLink to="/">
              <b>
                <p className="logo" id="logo"> SO </p>
              </b>
            </NavLink>
          </div>

          <SearchForm history={history} />

          {/* nav */}
          <nav className="site-navigation-links">
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span />
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <NavLink to="/">Questions</NavLink>
              </li>
              <li>
                <NavLink to="/post-question">Ask Question</NavLink>
              </li>
              {loggedIn ? (<li><NavLink id="profile" to="/profile"><img className="avatar" src={avatar} alt="avatar" /></NavLink></li>) : (<li><NavLink id="login" to="/login">Sign In</NavLink></li>) }
              {loggedIn ? (<li><NavLink id="logout" to="" onClick={this.logOutUser}>Log out</NavLink></li>) : (<li><NavLink id="signup" to="/signup">Sign up</NavLink></li>) }
            </ul>
          </nav>
          {/* /.nav */}
        </div>
      </section>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  logOutAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
});

const mapDispatchToProps = dispatch => ({
  logOutAction: () => dispatch(logoutRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

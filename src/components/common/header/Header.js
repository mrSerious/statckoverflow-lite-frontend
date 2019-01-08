import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import avatar from '../../../../public/images/avatar.jpg';
import SearchForm from './SearchForm';
import main from '../../../../public/js/main';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    main();
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
                <NavLink to="/home">Questions</NavLink>
              </li>
              <li>
                <NavLink to="/newQuestion">Ask Question</NavLink>
              </li>
              {loggedIn ? (<li><NavLink id="profile" to="/profile"><img className="avatar" src={avatar} alt="avatar" /></NavLink></li>) : (<li><NavLink id="signin" to="/signin">Sign In</NavLink></li>) }
              {loggedIn ? (<li><NavLink id="logout" to="/logout">Log out</NavLink></li>) : (<li><NavLink id="signup" to="/signup">Sign up</NavLink></li>) }
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
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Header));

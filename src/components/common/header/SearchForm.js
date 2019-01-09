import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchRequest } from '../../../actions/searchAction';

export class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    const { search, history } = this.props;
    history.push('/results');
    search(value);
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="site-navigation-search">
        <input
          type="text"
          placeholder="Search for..."
          name="search"
          value={value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  search: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  loading: state.search.loading,
});

export const mapDispatchToProps = dispatch => ({
  search: (searchTerm) => {
    dispatch(searchRequest(searchTerm));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

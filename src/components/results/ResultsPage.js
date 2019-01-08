import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { results } = this.props;
    const renderResults = results.map((question, index) => (
      <div key={`post${String(index)}`} className="question-summary container">
        <div className="row">
          <div className="one-fourth column">
            <div className="question-meta">
              <div className="votes">
                <div className="mini-counts">
                  <span>0</span>
                </div>
                <div><i className="fas fa-heart" aria-hidden="true" /></div>
              </div>
              <div className="status">
                <div className="mini-counts">
                  <span>1</span>
                </div>
                <div><i className="fas fa-pencil-alt" aria-hidden="true" /></div>
              </div>
              <div className="views">
                <div className="mini-counts">
                  <span>17</span>
                </div>
                <div><i className="fas fa-eye" aria-hidden="true" /></div>
              </div>
            </div>
          </div>
          <div className="three-fourths column">
            <div className="user-question">
              <span>
                asked by&nbsp;
                <a href="profile.html">
                  {question.username}
                  &nbsp;
                </a>
                1 year ago
              </span>
            </div>
            <h2 className="question-title">
              <a href="question_details.html">{question.title}</a>
            </h2>
            <div className="tags">
              <a href="" className="post-tag" title="" rel="tag">java</a>
              <a href="" className="post-tag" title="" rel="tag">maven</a>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="site-content">
        <h1 className="header-title">Search Results</h1>
        <ul className="results-wrapper">
          {
            renderResults
          }
        </ul>
      </div>
    );
  }
}

ResultPage.propTypes = {
  results: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  results: state.search.results,
  loading: state.search.loading
});

export default connect(mapStateToProps, null)(ResultPage);

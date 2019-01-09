import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Loader from '../common/Loader';
import { allQuestionsRequest } from '../../actions/allQuestionsActions';

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount = async () => {
    const { getQuestions } = this.props;
    const { questions } = this.props;
    await getQuestions();
    this.setState({ questions });
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <Loader />;
    }
    const { questions } = this.state;

    const renderQuestions = questions.map((question, index) => (
      <div key={`post${String(index)}`} className="question-summary">
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
                <NavLink href="/profile">
                  {question.username}
                  &nbsp;
                </NavLink>
                1 year ago
              </span>
            </div>
            <h2 className="question-title">
              <a href="question_details.html">{question.title}</a>
            </h2>
            <div className="tags">
              <NavLink to="" className="post-tag" title="" rel="tag">java</NavLink>
              <NavLink to="" className="post-tag" title="" rel="tag">maven</NavLink>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="site-content container">
        <div className="questions">
          <div className="q-headline">
            <h1>Latest Questions</h1>
            <a className="sort-button" href="">Sort By Popular</a>
          </div>
          <div className="list-wrapper">
            <div id="question-mini-list">
              {renderQuestions}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  getQuestions: propTypes.func.isRequired,
  questions: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getQuestions: () => dispatch(allQuestionsRequest()),
});

const mapStateToProps = state => ({
  loading: state.questions.loading,
  questions: state.questions.questions,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import propTypes from 'prop-types';
import { requestPostQuestion } from '../../actions/postQuestionActions';

export class PostQuestionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      error, history, postQuestion, id
    } = this.props;

    await postQuestion({ ...this.state });

    if (error) {
      toastr.error((error));
    } else {
      setTimeout(() => history.push(`question/${id}`), 6000);
    }
  };

  render() {
    const { title } = this.state;
    return (
      <div className="container">
        <div className="new-question-container">
          <div className="new-question-heading">
            <h1 className="new-question-header">Ask a question</h1>
            <div className="new-question-sub">Running into trouble? Our developer community is here to help!</div>
          </div>
        </div>

        <div className="new-question-form">
          <form id="new_question" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group">
                <div className="one column">
                  <label htmlFor="title">What's your question?*</label>
                  <input
                    id="title"
                    placeholder="Tell us what you need help figuring out"
                    value={title}
                    onChange={this.handleChange}
                    required
                    name="title"
                    type="text"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="one column">
                  <label htmlFor="tags">Tags*</label>
                  <input
                    type="text"
                    name="tags"
                    onChange={this.handleChange}
                    placeholder="Add a couple tags to help others find your question"
                  />
                </div>

                <div className="one column">
                  <label htmlFor="male">What else do we need to know?*</label>
                  <textarea
                    id="body"
                    name="body"
                    rows="5"
                    cols="30"
                    onChange={this.handleChange}
                    placeholder="Include details like logs, error messages, OS used, or steps you've already taken."
                  />
                </div>

                <div className="one column">
                  <button type="submit">Submit</button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postQuestion: question => dispatch(requestPostQuestion(question)),
});

const mapStateToProps = state => ({
  error: state.login.error,
});


PostQuestionPage.propTypes = {
  error: propTypes.string.isRequired,
  postQuestion: propTypes.func.isRequired,
  history: propTypes.object.isRequired,
  id: propTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PostQuestionPage);

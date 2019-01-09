import * as actions from '../../../src/actions/postQuestionActions';
import * as types from '../../../src/actions/actionTypes';

const expectedAction = {};

describe('postQuestion actions test', () => {
  it('should handle POST_QUESTION_BEGIN', () => {
    expectedAction.type = types.POST_QUESTION_BEGIN;
    expect(actions.postQuestionBegin()).toEqual(expectedAction);
  });

  it('should handle POST_QUESTION_SUCCESS', () => {
    expectedAction.type = types.POST_QUESTION_SUCCESS;
    expect(actions.postQuestionSuccess())
      .toEqual(expectedAction);
  });

  it('should handle POST_QUESTION_ERROR', () => {
    expectedAction.type = types.POST_QUESTION_ERROR;
    expectedAction.payload = 'error';
    expect(actions.postQuestionError('error'))
      .toEqual(expectedAction);
  });
});

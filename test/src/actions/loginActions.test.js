import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS } from '../../../src/actions/actionTypes';
import { loginBegin, loginError, loginSuccess } from '../../../src/actions/loginActions';

const expectedAction = {};

describe('login actions test', () => {
  it('should handle LOGIN_BEGIN', () => {
    expectedAction.type = LOGIN_BEGIN;
    expect(loginBegin()).toEqual(expectedAction);
  });

  it('should handle LOGIN_SUCCESS', () => {
    expectedAction.type = LOGIN_SUCCESS;
    expectedAction.payload = {
      foo: 'foo',
      bar: 'bar',
    };
    expect(loginSuccess({ foo: 'foo', bar: 'bar' }))
      .toEqual(expectedAction);
  });

  it('should handle LOGIN_ERROR', () => {
    expectedAction.type = LOGIN_ERROR;
    expectedAction.payload = 'error';
    expect(loginError('error'))
      .toEqual(expectedAction);
  });
});

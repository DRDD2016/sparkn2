import test from 'tape';
import * as actions from '../../../src/js/actions/signup';

test('updateTextInput creates the correct action', (t) => {
  t.plan(1);

  const expected = {
    type: actions.UPDATE_TEXT_INPUT,
    data: 'michael@jackson.com',
    inputType: 'email'
  };
  const actual = actions.updateTextInput('michael@jackson.com', 'email');
  t.deepEqual(actual, expected);
});

test('updatePassword creates the correct action', (t) => {
  t.plan(1);

  const expected = {
    type: actions.UPDATE_TEXT_INPUT,
    data: 'testpassword',
    inputType: 'password'
  };
  const actual = actions.updateTextInput('testpassword', 'password');
  t.deepEqual(actual, expected);
});

test.skip('signupUser async action creator returns expected action', (t) => {
  t.plan(1);

  let actual;
  // const { dispatch, queue } = createThunk();
  // dispatch(actions.signupUser());

  // [{ ...actual }] = queue;

  const expected = {
    type: actions.SIGNUP_USER_REQUEST
  };
  t.deepEqual(actual, expected);
});

test('signupUserRequest creates the correct action', (t) => {
  t.plan(1);

  const expected = {
    type: actions.SIGNUP_USER_REQUEST
  };

  const actual = actions.signupUserRequest();
  t.deepEqual(actual, expected);
});

test('signupUserSuccess creates the correct action', (t) => {
  t.plan(1);

  const data = true;
  const expected = {
    type: actions.SIGNUP_USER_SUCCESS,
    data
  };

  const actual = actions.signupUserSuccess(data);
  t.deepEqual(actual, expected);
});

test('signupUserFailure creates the correct action', (t) => {
  t.plan(1);

  const error = new Error();
  const expected = {
    type: actions.SIGNUP_USER_FAILURE,
    error
  };
  const actual = actions.signupUserFailure(error);
  t.deepEqual(actual, expected);
});

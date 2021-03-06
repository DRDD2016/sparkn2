export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const LOGOUT = 'LOGOUT';

export const signupUserRequest = () => ({
  type: SIGNUP_USER_REQUEST
});

export const signupUserSuccess = data => ({
  type: SIGNUP_USER_SUCCESS,
  data
});

export const signupUserFailure = error => ({
  type: SIGNUP_USER_FAILURE,
  error
});

export function signupUser (firstname, surname, email, password) {

  return (dispatch) => {
    dispatch(signupUserRequest());
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstname, surname, email, password })
    })
    .then((response) => {
      response.json()
        .then(data => console.log(data));
    })
    .catch((error) => {
      dispatch(signupUserFailure(error));
    });
  };
}

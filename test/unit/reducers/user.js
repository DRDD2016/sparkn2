import test from 'tape';
import reducer from '../../../src/js/reducers/user';


test('Reducer handles GET_USER_REQUEST as expected', (t) => {

    const initialState = {
        isFetching: false,
        firstName: '',
        lastName: '',
        photoURL: '',
        id: '',
        error: undefined
    };
    const action = {
        type: "GET_USER_REQUEST",
        isFetching: true
    };
    const actual = reducer(initialState, action);
    const expected = {
        isFetching: true,
        firstName: '',
        lastName: '',
        photoURL: '',
        id: '',
        error: undefined
    };

    t.deepEqual(actual, expected, "GET_USER_REQUEST sets state correctly");
    t.end();
});

test('Reducer handles GET_USER_SUCCESS as expected', (t) => {
    const initialState = {
        isFetching: true,
        firstName: '',
        lastName: '',
        photoURL: '',
        id: '',
        error: undefined
    };
    const data = {
        firstName: 'Harry',
        lastName: 'Potter',
        photoURL: 'http://harrypotter.com/image.jpg',
        id: 12345678,
    };
    const action = {
        type: "GET_USER_SUCCESS",
        isFetching: false,
        data
    };
    const actual = reducer(initialState, action);
    const expected = {
        isFetching: false,
        firstName: 'Harry',
        lastName: 'Potter',
        photoURL: 'http://harrypotter.com/image.jpg',
        id: 12345678,
        error: undefined
    };

    t.deepEqual(actual, expected, "GET_USER_SUCCESS sets state correctly");
    t.end();
});

test('Reducer handles GET_USER_FAILURE as expected', (t) => {
    const initialState = {
        isFetching: false,
        firstName: '',
        lastName: '',
        photoURL: '',
        id: '',
        error: undefined
    };
    const error = {
        message: "Whoops"
    };
    const action = {
        type: "GET_USER_FAILURE",
        isFetching: false,
        error
    };
    const actual = reducer(initialState, action);
    const expected = {
        isFetching: false,
        firstName: '',
        lastName: '',
        photoURL: '',
        id: '',
        error: {
            message: "Whoops"
        }
    };

    t.deepEqual(actual, expected, "GET_USER_FAILURE sets state correctly");
    t.end();
});

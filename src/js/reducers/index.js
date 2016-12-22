import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import auth from './auth';
import user from './user';
import calendar from './calendar';
import { event } from './event';
import notifications from './notifications';
import create from './create';
import photos from './photos';
import signup from './signup';
import login from './login';


export default combineReducers({
  navigation: NavigationReducer,
  auth,
  user,
  calendar,
  event,
  notifications,
  create,
  photos,
  signup,
  login
});

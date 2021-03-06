import { createRouter } from '@exponent/ex-navigation';
import Index from './components/auth';
import LoginContainer from './containers/auth/login';
import SignupContainer from './containers/auth/signup';
import AlbumsContainer from './containers/albums';
import CalendarContainer from './containers/calendar';
import FeedContainer from './containers/feed';
import ProfileContainer from './containers/profile';
import DetailsContainer from './containers/create/details';
import WhatContainer from './containers/create/what';
import WhereContainer from './containers/create/where';
import WhenContainer from './containers/create/when';
import InviteContainer from './containers/create/invite';
import ConfirmContainer from './containers/create/confirm';
import EventContainer from './containers/event';
import Navbar from './components/navbar';

const Router = createRouter(() => ({
  auth: () => Index,
  login: () => LoginContainer,
  signup: () => SignupContainer,
  albums: () => AlbumsContainer,
  calendar: () => CalendarContainer,
  feed: () => FeedContainer,
  profile: () => ProfileContainer,
  navbar: () => Navbar,
  details: () => DetailsContainer,
  what: () => WhatContainer,
  where: () => WhereContainer,
  when: () => WhenContainer,
  invite: () => InviteContainer,
  confirm: () => ConfirmContainer,
  event: () => EventContainer
}));

export default Router;

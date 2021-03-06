import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation
} from '@exponent/ex-navigation';
import { store } from './init-store';
import Router from './router';

// disable remote debugger warning in a simulator
console.disableYellowBox = true;

const navigationContext = new NavigationContext({
  router: Router,
  store
});

class App extends Component {

  cancelEvent () {
    this.props.discardEvent();
  }
  render () {
    return (
      <Provider store={ store }>
        <NavigationProvider context={ navigationContext }>
          <StackNavigation initialRoute={ Router.getRoute('signup') } />
        </NavigationProvider>
      </Provider>
    );
  }
}

export default App;

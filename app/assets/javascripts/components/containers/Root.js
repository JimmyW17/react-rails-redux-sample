import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import configureStore from '../store/configureStore';
import {setCounter} from '../actions/counter'

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(setCounter(this.props.counter)); // initialize states using dispatch
  }
  render() {
    return (
      // Provider makes the store available to all container components in the application without passing it explicitly
      // You only need to use it once when you render the root component
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}


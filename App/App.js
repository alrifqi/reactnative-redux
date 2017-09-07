import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store/store.js';
import Counter from './components/Counter';
import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login/>
      </Provider>
    );
  }
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import Login from './src/screens/auth/Login'
import store from './src/redux/store';
const App: () => Node = () => {
  const reduxStore = store();
  return (
    <Provider store={reduxStore}>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <Login />
      </SafeAreaView>
    </Provider>
  );
};


export default App;

'use strict';

import {AppRegistry, PropTypes, StatusBarIOS} from 'react-native';
import React, {Component} from 'react'
import {Provider} from 'react-redux';
import {injectDeps} from 'react-simple-di';

import {store, setupStore} from "./utils/setup-store";
import {context} from "./utils/context";
import App from './App'

export const PLATFORM = {
  ANDROID: "ADNROID",
  IOS: "IOS"
}

export function setup(platform = PLATFORM.IOS) {
  return () => {
    class Root extends Component {
      state = {
        isLoading: true,
        store: store
      };

      constructor(props) {
        super(props);
        setupStore().then(() => {
          this.setState({
            isLoading: false
          })
        })
      }

      render() {
        if (this.state.isLoading) {
          return null;
        }

        return (
          <Provider store={this.state.store}>
            <App />
          </Provider>
        );
      }
    }

    return injectDeps(context)(Root);
  }
}
'use strict';
import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

import * as reducers from '../reducers';

export const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
export const store = createStore(
  combineReducers(reducers),
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
  )
)

export function setupStore() {
  return new Promise((resolve, reject) => {
    persistStore(store, {storage: AsyncStorage, blacklist: ['global']}, resolve);
    if (isDebuggingInChrome) {
      window.store = store;
    }
    return store;
  });
}

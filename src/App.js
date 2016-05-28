'use strict';

import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {useDeps} from 'react-simple-di';

class App extends React.Component {
  static propTypes = {
  };
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// Inject Deps
const AppWithDeps = useDeps((context) => ({
}))(App);

// Connect to Redux
const AppContainer = connect(state => ({
  global: state.global,
}))(AppWithDeps)

export default AppContainer;
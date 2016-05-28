'use strict';

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import {setup, PLATFORM} from './src/setup'

AppRegistry.registerComponent('app', setup(PLATFORM.IOS));

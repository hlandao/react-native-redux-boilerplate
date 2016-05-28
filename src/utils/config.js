'use strict';

var basicConfig = require('../config/config.base.json')
var customConfig = __DEV__ ? require('../config/config.dev.json') : require('../config/config.production.json');

export const config = Object.assign(basicConfig, customConfig);
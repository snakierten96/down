'use strict';

const path = require('path');

require('ts-node').register({
  project: path.join(__dirname)
});

require('./main');
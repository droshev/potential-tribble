'use strict';

const denoVersion = require('..');
const assert = require('assert').strict;

assert.strictEqual(denoVersion(), 'Hello from denoVersion');
console.info('denoVersion tests passed');

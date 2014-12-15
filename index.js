'use strict';

/*!
 * imports.
 */

var array = require('to-array.js');
var get = require('env-accessors').get;

/*!
 * exports.
 */

module.exports = allowed;

/**
 * Whether an environment variable's value is contained within an allow list.
 * Allow list is provided by a comma-separated environment variable value.
 *
 * @param {String} allowListKey
 * Name of environment variable containing allow list.
 *
 * @param {String} testValueKey
 * Name of environment variable containing value to test against allow list.
 *
 * @return {Boolean}
 * Whether environment varaible's value is contained within allow list.
 *
 * @api public
 */

function allowed(allowListKey, testValueKey) {
  return array(get(allowListKey), ',').indexOf(get(testValueKey || 'NODE_ENV')) > -1;
}

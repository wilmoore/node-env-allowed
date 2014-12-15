'use strict';

/*!
 * imports.
 */

var test = require('tape');

/*!
 * imports (local).
 */

var allowed = require('./');

/*!
 * setup.
 */

process.env.GROUPS = 'users,powerusers,guests';

/*!
 * tests.
 */

test('is allowed', function (t) {
  t.plan(1);
  process.env.CURRENT_GROUP = 'guests';
  t.assert(allowed('GROUPS', 'CURRENT_GROUP'));
});

test('is not allowed', function (t) {
  t.plan(1);
  process.env.CURRENT_GROUP = 'nobody';
  t.notOk(allowed('GROUPS', 'CURRENT_GROUP'));
});

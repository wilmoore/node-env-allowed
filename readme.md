# env-allowed

[![Build Status](http://img.shields.io/travis/wilmoore/node-env-allowed.svg)](https://travis-ci.org/wilmoore/node-env-allowed) [![NPM version](http://img.shields.io/npm/v/env-allowed.svg)](https://www.npmjs.org/package/env-allowed) [![NPM downloads](http://img.shields.io/npm/dm/env-allowed.svg)](https://www.npmjs.org/package/env-allowed) [![LICENSE](http://img.shields.io/npm/l/env-allowed.svg)](license)

> Whether an environment variable's value is contained within an allow list. Allow list is provided by a comma-separated environment variable value.

    $ npm install env-allowed --save

## Example

###### Start `node` or your program with a value that is in the allow list.

    NODE_ENV=developent node

###### Create a comma-separated allow list.

    process.env.ENVIRONMENTS = 'development,test';

###### Validate that the current `NODE_ENV` is within the allow list.

    allowed('ENVIRONMENTS');
    // true

## License

  [MIT](license)

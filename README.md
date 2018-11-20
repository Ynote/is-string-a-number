# is-string-a-number [![NPM version](https://img.shields.io/npm/v/is-string-a-number.svg?style=flat)](https://www.npmjs.com/package/is-string-a-number) [![Bundle size](https://img.shields.io/bundlephobia/min/is-string-a-number.svg)](https://www.npmjs.com/package/is-string-a-number)

> Returns `true` if the value is a string number written in fixed notation and
in decimal base.

## Motivation

This utility module has a front-end purpose. As JavaScript doesn't provide a
clean and unique way to check if a value is a number or written in a specific
notation or base, type checking on numbers is hard.

Front-end developers often have to deal with user inputs, especially within
forms. The need, here, is to validate a `string` value as a simple number in
**decimal base and fixed notation**.

## Code example

```js
import isStringANumber from 'is-string-a-number'

isStringANumber('42')    // => true
isStringANumber('42e42') // => false
isStringANumber('0x2a')  // => false
isStringANumber('42.')   // => false
isStringANumber(42)      // => false
```

More details on the [usage section](#usage).

## Install

Install with [npm](https://www.npmjs.com/):
```sh
$ npm install --save is-string-a-number
```

## Usage

With CommonJs:
```js
const isStringANumber = require('is-string-a-number')
```

With ECMAScript module:
```js
import isStringANumber from 'is-string-a-number'
```

### true
```js
isStringANumber('0')     // => true
isStringANumber('42')    // => true
isStringANumber('42.2')  // => true
isStringANumber('-42')   // => true
isStringANumber('-42.2') // => true
isStringANumber('-0.42') // => true
```

### false
```js
isStringANumber(0)                     // => false
isStringANumber(.42)                   // => false
isStringANumber(42)                    // => false
isStringANumber(-42)                   // => false
isStringANumber(-42.2)                 // => false
isStringANumber('+42')                 // => false
isStringANumber('42,2')                // => false
isStringANumber('42e24')               // => false
isStringANumber('42E24')               // => false
isStringANumber('42e+24')              // => false
isStringANumber('42e-24')              // => false
isStringANumber('42foobar')            // => false
isStringANumber('0x2a')                // => false
isStringANumber('.')                   // => false
isStringANumber('42.')                 // => false
isStringANumber(null)                  // => false
isStringANumber(undefined)             // => false
isStringANumber(NaN)                   // => false
isStringANumber('Alice in Wonderland') // => false
isStringANumber('')                    // => false
isStringANumber('   ')                 // => false
isStringANumber('\r\n\t')              // => false
isStringANumber([])                    // => false
isStringANumber({})                    // => false
isStringANumber(function() {})         // => false
isStringANumber(true)                  // => false
isStringANumber(false)                 // => false
isStringANumber('true')                // => false
isStringANumber('false')               // => false
isStringANumber(Infinity)              // => false
isStringANumber(-Infinity)             // => false
isStringANumber(new Date())            // => false
```

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/Ynote/is-string-a-number. This project is intended to be a
safe, welcoming space for collaboration, and contributors are expected to adhere
to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Code of Conduct

Everyone interacting in the **is-string-a-number** project’s codebases, issue
trackers, chat rooms and mailing lists is expected to follow the
[code of conduct](https://github.com/Ynote/is-string-a-number/blob/master/CODE_OF_CONDUCT.md).

## Credits

Special thanks to [Jon Schlinkert](https://github.com/jonschlinkert/) for his
great [is-number](https://github.com/jonschlinkert/is-number) module that
inspired me.

### Resources
- [The global parseFloat top-level function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [Displaying numbers in
  JavaScript](http://2ality.com/2012/03/displaying-numbers.html) by [Axel
  Rauschmayer](http://dr-axel.de/)
- [How numbers are encoded in
  JavaScript](http://2ality.com/2012/04/number-encoding.html) by [Axel
  Rauschmayer](http://dr-axel.de/)

## Licence

The module is available as open source under the terms of the [MIT
License](LICENSE.md).

MIT © [Ynote_hk](http://ynote.hk)

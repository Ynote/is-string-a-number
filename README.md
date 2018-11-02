# is-plain-number [![NPM version](https://img.shields.io/npm/v/is-plain-number.svg?style=flat)](https://www.npmjs.com/package/is-number)

**is-plain-number** is a JavaScript utility. It returns `true` if the value
is a number or plain number string (not in scientific exponential notation or
hexadecimal notation for instance).

## Install

Install with npm:
```sh
$ npm install --save is-plain-number
```

## Usage

With CommonJs:
```js
const isPlainNumber = require('is-plain-number')
```

With ECMAScript module:
```js
import isPlainNumber from 'is-plain-number'
```

### true
```js
isPlainNumber(0)       // => true
isPlainNumber(.42)     // => true
isPlainNumber(42)      // => true
isPlainNumber(-42)     // => true
isPlainNumber(-42.2)   // => true
isPlainNumber('0')     // => true
isPlainNumber('42')    // => true
isPlainNumber('42.2')  // => true
isPlainNumber('-42')   // => true
isPlainNumber('-42.2') // => true
isPlainNumber('-0.42') // => true
```

### false
```js
isPlainNumber('+42')                 // => false
isPlainNumber('42,2')                // => false
isPlainNumber('42e24')               // => false
isPlainNumber('42E24')               // => false
isPlainNumber('42e+24')              // => false
isPlainNumber('42e-24')              // => false
isPlainNumber('42foobar')            // => false
isPlainNumber('0x2a')                // => false
isPlainNumber('.')                   // => false
isPlainNumber('42.')                 // => false
isPlainNumber(null)                  // => false
isPlainNumber(undefined)             // => false
isPlainNumber(NaN)                   // => false
isPlainNumber('Alice in Wonderland') // => false
isPlainNumber('')                    // => false
isPlainNumber('   ')                 // => false
isPlainNumber('\r\n\t')              // => false
isPlainNumber([])                    // => false
isPlainNumber({})                    // => false
isPlainNumber(function() {})         // => false
isPlainNumber(true)                  // => false
isPlainNumber(false)                 // => false
isPlainNumber('true')                // => false
isPlainNumber('false')               // => false
isPlainNumber(Infinity)              // => false
isPlainNumber(-Infinity)             // => false
isPlainNumber(new Date())            // => false
```

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/Ynote/is-plain-number. This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to
the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Code of Conduct

Everyone interacting in the GraphAttack project’s codebases, issue trackers,
chat rooms and mailing lists is expected to follow the
[code of conduct](https://github.com/Ynote/is-plain-number/blob/master/CODE_OF_CONDUCT.md).

## Notes

Special thanks to [Jon Schlinkert](https://github.com/jonschlinkert/) for his
great [is-number](https://github.com/jonschlinkert/is-number) module that
inspired me.

## Licence

The module is available as open source under the terms of the [MIT
License](LICENSE.md).

'use strict'

require('mocha')
var assert = require('assert')
var isStringANumber = require('./')

describe('isStringANumber', function() {
  var truthyFixtures = [
    '0',
    '42',
    '42.2',
    '-42',
    '-42.2',
    '-0.42',
  ]

  var falseyFixtures = [
    0,
    .42,
    42,
    42.2,
    -42,
    -42.2,
    -0.42,
    '+42',
    '42,2',
    '42e24',
    '42E24',
    '42e+24',
    '42e-24',
    '42foobar',
    '0x2a',
    '.',
    '42.',
    null,
    undefined,
    NaN,
    'Alice in Wonderland',
    '',
    '  ',
    '\r\n\t',
    [],
    {},
    function() {},
    true,
    false,
    'true',
    'false',
    Infinity,
    -Infinity,
    new Date(),
  ]

  truthyFixtures.forEach(function(value) {
    it('is true with ' + JSON.stringify(value), function() {
      assert(
        isStringANumber(value),
        'expected "' + String(value) + '" to be a plain number'
      )
    })
  })

  falseyFixtures.forEach(function(value) {
    it('is false with ' + JSON.stringify(value), function() {
      assert(
        !isStringANumber(value),
        'expected "' + String(value) + '" not to be a plain number'
      )
    })
  })
})

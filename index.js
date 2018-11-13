'use strict'

module.exports = function(value) {
  var float = parseFloat(value)

  if (isNaN(float)) return false
  if(value === Infinity) return false
  if(value === -Infinity) return false

  // Thanks JavaScript parseFloat (╯°□°）╯︵ ┻━┻
  //
  // `parseFloat` with strings returns a floating point number with inconsistent behaviours:
  // - strings with scientific exponential notation (eg. `parseFloat("42e24")` returns `4.2e+25`)
  // - strings with hexadecimal base (eg. `parseFloat("0x2a")` returns `0`)
  // - strings that start with a number (eg. `parseFloat("42foobar") returns `42`)
  return String(float) === String(value)
}

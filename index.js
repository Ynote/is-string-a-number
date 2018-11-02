'use strict'

module.exports = function(value) {
  var float = parseFloat(value)

  if (isNaN(float)) return false
  if(value === Infinity) return false
  if(value === -Infinity) return false

  // Thanks JavaScript parseFloat (╯°□°）╯︵ ┻━┻
  //
  // `parseFloat` returns a float for :
  // - strings with scientific exponential notation (eg. "42e24")
  // - strings that start with a number (eg. "42foobar")
  // - strings with hexadecimal notation (eg. "0x2a")
  return String(float) === String(value)
}

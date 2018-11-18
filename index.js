'use strict'

module.exports = function(value) {
  if (typeof value === 'number') {
    console.warn(
      '[is-string-a-number] You passed the number ' +
      value + ' ' +
      'as an argument. This module only checks if string values represents a ' +
      'number. ' +
      'Please consider using others modules like `is-number` if you want to ' +
      'check if your input value is a number.'
    )

    return false
  }

  var float = parseFloat(value)

  if (isNaN(float)) return false
  if (!isFinite(float)) return false

  return String(float) === String(value)
}

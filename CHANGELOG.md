# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## unreleased

## [v2.0.2] - 2018-11-20

Patch:
- Update README examples.

## [v2.0.1] - 2018-11-19

Patch:
- Add an early return if the value is not a `string`.

## [v2.0.0] - 2018-11-18

Breaking changes:
- **Rename the module `is-plain-number` to `is-string-a-number`**. After some
  thoughts, I realised that the purpose of the module was to specifically check
  if a `string` value was representing a number in decimal base and fixed
  notation. I renamed the module so it can clearly express what it was doing.
- Only check `string` values. `number` values are not accepted anymore.

## [v1.0.1] - 2018-11-03

Patch:
- Update README with more specific information.

## [v1.0.0] - 2018-11-02

First release :rocket:

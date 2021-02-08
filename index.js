const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual')
const countOnly = require('./countOnly')
const countLetters = require('./countLetters')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const map = require('./map')
const letterPositions = require('./letterPositions')
const takeUntil = require('./takeUntil')
const without = require('./without')


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  map: map,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without
  
};
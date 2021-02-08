# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @butlerlr/lotide`

**Require it:**

`const _ = require('@butlerlr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: takes the first index of an array and generates a new array
* `tail(...)`: takes the last index of an array and generates a new array
* `middle(...)`: takes the middle index of an array and generates a new array
* `flatten(...)`: generates a new array from a nested array
* `assertObjectsEqual(...)`: asserts if objects are equal
* `assertEqual(...)`: asserts if two strings or integers are equal
* `assertArraysEqual(...)`: asserts if arrays are equal
* `countLetters(...)`: counts items
* `countOnly(...)`: counts only a certain item
* `eqArrays(...)`: check if two arrays are equal
* `eqObjects(...)`: check if two objects are equal
* `findKey(...)`: find the key of an object
* `findKeyByValue(...)`: find the key of an object using its value
* `map(...)`: Lotide's map function
* `letterPositions(...)`: return all the indices in the string where each character is found
* `takeUntil(...)`: return a slice of the array with elements taken from the beginning.
* `without(...)`: return a subset of a given array, removing unwanted elements

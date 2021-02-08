const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const pass = String.fromCodePoint(0x1f60d);
  const fail = String.fromCodePoint(0x1f631);

  if (eqArrays(array1, array2) === true) {
    console.log(
      `${pass}${pass}${pass} Assertion Passed: ${array1} === ${array2}`
    );
  } else {
    console.log(
      `${fail}${fail}${fail} Assertion Failed: ${array1} !== ${array2}`
    );
  }
};

module.exports = assertArraysEqual;


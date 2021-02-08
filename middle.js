const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  const mid = array.length / 2;
  if (array.length <= 2) {
    return [];
  } else if (array.length > 2 && array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[Math.floor(mid)]];
  }
};

module.exports = middle;

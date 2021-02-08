const assertEqual = require("./assertEqual");

const tail = function(array1) {
  if (!array1) {
    return null;
  }
  if (Array.isArray(array1)) {
    return array1[array1.length - 1];
  }
};

module.exports = tail;

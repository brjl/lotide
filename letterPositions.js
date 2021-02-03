const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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

const letterPositions = function(sentence) {
  const result = {};
  let letters = sentence.split(" ").join("");
  for (let i = 0; i < letters.length; i++) {
    

    if (result[letters[i]]) {
      result[letters[i]].push([i]);
    } else {
      result[letters[i]] = [i];
    }
  }
  return result;
};

console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);















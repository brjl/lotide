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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


assertArraysEqual(map(words, (word) => word[0]),["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, (word) => word[0]),[1, 2, 3]);
assertArraysEqual(
  map(words, (word) => word[1]),
  [1, 2, 3]
);
assertArraysEqual(
  map(words, (word) => word[1]),
  ["r", "o", "o", "a", "o"]
);







// const map2 = (words.map(word => word.length))

// const results1 = map(words, word => word[0]);
// console.log(results1);
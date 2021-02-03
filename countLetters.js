const assertEqual = function(actual, expected) {
  const pass = String.fromCodePoint(0x1f60d);
  const fail = String.fromCodePoint(0x1f631);

  if (actual === expected) {
    console.log(
      `${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(
      `${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`
    );
  }
};

const countLetters = function(originalWord) {
  const result = {};
  let word = originalWord.split(" ").join("");

  for (let letter of word) {
    // console.log(letter);

    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("sitting in the park"));

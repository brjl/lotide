const assertEqual = function (actual, expected) {
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

const findKeyByValue = function (obj, val) {
  //console.log(Object.keys(obj));

  for (let iterator of Object.keys(obj)) {
    if (obj[iterator] === val) {
      return iterator;
    
    }
  }
  return undefined
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

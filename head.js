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

const head = function(array1) {
  return array1.shift();
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 5);
assertEqual(head([]), 5);

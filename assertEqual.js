const assertEqual = function(actual, expected) {
  const pass = String.fromCodePoint(0x1f60d);
  const fail = String.fromCodePoint(0x1f631);

  if (actual === expected) {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("cool", "cool");
assertEqual("cool", "uncool");
assertEqual(23, 32);

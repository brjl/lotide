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

const findKey = function(object, callback) {
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 3 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 2 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 3
  ),
  "elBulli"
);



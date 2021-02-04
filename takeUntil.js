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

const input1 = ["Who", "Am", "I?"];
const input2 = [42, 64, 78, 100, 200, 13];

const takeUntil = function(array, callback) {
  const results = [];
  for (const iterator of array) {
    results.push(callback(iterator));
  }
  return results;
};

const output1 = takeUntil(input1, (iterator) => iterator + "!");
console.log(output1);
const output2 = takeUntil(input2, (iterator) => iterator + 1);
console.log(output2);

//TEST CASES
assertArraysEqual(output2, [42, 64, 78, 100, 200, 13]);
assertArraysEqual(output2, [43, 65, 79, 101, 201, 14]);

assertArraysEqual(output1, ["Who!, Am!, I?!"]);
assertArraysEqual(output1, ["Who", "Am", "I?"]);
assertArraysEqual(output1, ["Who!", "Am!", "I?!"]);



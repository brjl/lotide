const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), 3);
  });

  it("returns 7 for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7]), 7);
  });

  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
  });

  it("not given an array returns null", () => {
    const actual = tail();
    const expected = null;
    assert.deepEqual(actual, expected);
  });
});

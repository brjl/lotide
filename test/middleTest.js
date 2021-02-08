const middle = require('../middle');
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5]), 3);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(middle([5, 6, 7]), 6);
  });

  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(middle(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
  });
  
  it("returns [] for [1, 2]", () => {
    assert.strictEqual(middle([1, 2]), []);
  });

  it("returns [] for [1]", () => {
    assert.strictEqual(middle([1]), []);
  });
  
});


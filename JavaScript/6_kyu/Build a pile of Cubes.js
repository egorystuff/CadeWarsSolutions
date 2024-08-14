// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  let check = 0;
  let output = 1;
  for (let i = 1; check < m; i++) {
    check += output ** 3;

    if (check === m) return i;
    output++;
  }

  return -1;
}

// const { assert } = require("chai");

// it("Basic tests", function () {
//   assert.strictEqual(findNb(4183059834009), 2022);
//   assert.strictEqual(findNb(24723578342962), -1);
//   assert.strictEqual(findNb(135440716410000), 4824);
//   assert.strictEqual(findNb(40539911473216), 3568);
// });

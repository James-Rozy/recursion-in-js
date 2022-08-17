const sumRange = require("./sum-all-numbers");

describe("Sums all numbers in the range using recursion", () => {
  test("Sums the range of 3", () => {
    expect(sumRange.sumRange(3)).toBe(6);
  });
});

const checkArray = require("./checkArray");

describe("Recursively checks the array to see if all numbers are less than the provided number", () => {
  test("Checks to see if the array contents is less than 7", () => {
    expect(checkArray.all([1, 2, 9], 7)).toBe(false);
  });

  test("Checks to see if the array contents is less than 7", () => {
    expect(checkArray.all([1, 2, 5], 7)).toBe(true);
  });
});

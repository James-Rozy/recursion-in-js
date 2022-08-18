const parseArray = require("./parse-md-arr");

describe("Given a multi-dimensional integer array, return the total number of integers stored inside this array", () => {
  test("Recursively finds the number of integers in the array", () => {
    expect(parseArray.totalIntegers()).toBe(7); // tesing array stored as default input value
  });
});

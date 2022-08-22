const fibonacci = require("./fibonacci");

describe("Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence", () => {
  test("Without using recursion, find the fibonacci sequence of 8", () => {
    expect(fibonacci.fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

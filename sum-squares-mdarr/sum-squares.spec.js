const sumSquares = require("./sum-squares");

const arr1 = [1, 2, 3];
const arr2 = [[1, 2], 3];
const arr3 = [[[[[[[[[1]]]]]]]]];
const arr4 = [10, [[10], 10], [10]];

describe("Write a function that sums squares of numbers in list that may contain more lists", () => {
  test("Recursively squares any numbers within the array and sums up the sqaures", () => {
    expect(sumSquares.sumSquares(arr1)).toBe(14);
  });
});

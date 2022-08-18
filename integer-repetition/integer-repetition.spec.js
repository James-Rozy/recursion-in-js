const integerRepetition = require("./integer-repetition");

describe("The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.", () => {
  test("Recursively replicates the number the correct amount of times", () => {
    expect(integerRepetition.replicate(3, 5)).toStrictEqual([5, 5, 5]);
  });
});

const factorial = require("./factorial");

describe("Recursively finds the factorial of the provided number", () => {
  test("Finds the factorial of 5", () => {
    expect(factorial.factorial(5)).toBe(120);
  });
});

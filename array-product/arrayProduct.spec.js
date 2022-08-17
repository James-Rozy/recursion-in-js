const arrayProduct = require("./arrayProduct");

describe("Recursively finds the product of the array", () => {
  test("Finds the product of [1, 2, 3]", () => {
    expect(arrayProduct.productOfArray([1, 2, 3])).toBe(6);
  });

  test("Finds the product of [1, 2, 3, 10]", () => {
    expect(arrayProduct.productOfArray([1, 2, 3, 10])).toBe(60);
  });
});

const power = require("./power");

describe("Raises the number(num) to the power(pow)", () => {
  test("Raises 2 to the power of 4", () => {
    expect(power.power(2, 4)).toBe(16);
  });
});

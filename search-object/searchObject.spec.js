const searchObject = require("./searchObject");

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

describe("Recursively searches a nested object for the provided key value", () => {
  test("Searches the nested object for 44", () => {
    expect(searchObject.contains(nestedObject, 44)).toBe(true);
  });

  test("Searches the nested object for 'foo'", () => {
    expect(searchObject.contains(nestedObject, "foo")).toBe(false);
  });
});

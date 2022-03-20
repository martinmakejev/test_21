const sum = require("./sum");

test("10 + 0 = 10", () => {
  expect(sum(10, 0)).toBe(10);
});

test("get error when invalid input", () => {
  expect(() => {
    sum("mdea", 123);
  }).toThrow("first parameeter is not number");
});

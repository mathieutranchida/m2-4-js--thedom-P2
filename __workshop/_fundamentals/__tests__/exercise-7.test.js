// We import (require) the function that we want to test.
const addValues = require("../exercise-7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
  ]);
  // add more tests here...
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
      ],
      { isAvailable: false }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: false },
    { name: "liv", age: 36, isAvailable: false },
  ]);
  expect(
    addValues(
      [
        { name: "Mathieu", age: 22 },
        { name: "Marion", age: 21 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "Mathieu", age: 22, isAvailable: true },
    { name: "Marion", age: 21, isAvailable: true },
  ]);
  expect(
    addValues([{ name: "Laurent", age: 51 }], { isAvailable: false })
  ).toStrictEqual([{ name: "Laurent", age: 51, isAvailable: false }]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect

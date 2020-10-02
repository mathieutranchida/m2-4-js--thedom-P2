// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  // add more tests here...
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }, { name: "Suzy" }], {
      isAvailable: false,
    })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
    { name: "Suzy", isAvailable: false },
  ]);
  expect(
    insert([{ name: "Matt" }, { name: "Albert" }, { name: "Suzy" }], {
      isAvailable: false,
    })
  ).toStrictEqual([
    { name: "Matt", isAvailable: false },
    { name: "Albert", isAvailable: false },
    { name: "Suzy", isAvailable: false },
  ]);
  expect(
    insert([{ name: "Marion" }, { name: "Laurent" }, { name: "François" }], {
      isAvailable: false,
    })
  ).toStrictEqual([
    { name: "Marion", isAvailable: false },
    { name: "Laurent", isAvailable: false },
    { name: "François", isAvailable: false },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect

import { forEachObject } from "../src/array/forEach";

test("forEachObject", () => {
  let T = {
    name: "king",
    jop: "frontend",
  };

  console.log("test 22");

  forEachObject(T, (key, value) => {
    expect(Object.keys(T).includes(key)).toBe(true);
    expect(T[key]).toEqual(value);
  });
});

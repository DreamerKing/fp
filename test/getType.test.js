import { getType } from "../src/getType";

test("getType()", () => {
  expect(getType(3)).toEqual("number");
  expect(getType({})).toEqual("object");
  expect(getType(getType)).toEqual("function");
});

import { curry, partial } from "../src/function.js";
import { map } from "../src/array.js";

test("curry()", () => {
  const add = (x, y) => x + y;
  const curriedAdd = curry(add)(2);
  const fullCurried = curry(add)(2)(3);
  const sum = add(2, 3);
  expect(curriedAdd(3)).toEqual(sum);
  expect(fullCurried).toEqual(sum);
});

test("2 curry()", () => {
  const match = curry(function (expr, str) {
    return str.match(expr);
  });

  const hasNumber = match(/\d+/);
  const filter = curry(function (fn, arr) {
    return arr.filter(fn);
  });

  const findFiltersInArray = filter(hasNumber);
  const array = ["a", "sd2", "23", "c", "06c"];
  expect(findFiltersInArray(array)).toEqual(["sd2", "23", "06c"]);
});

test("3 curry()", () => {
  const testArray = [1, 2, 3];
  const curriedMap = curry(map)(testArray);
  const result = curriedMap(x => x * x);
  expect(result).toEqual([1, 4, 9]);
});

test("1 partial()", async () => {
  const delay = partial(setTimeout, undefined, 2000);
  const delayfn = function () {
    return new Promise(resolve => delay(resolve(12)));
  };
  const result = await delayfn();
  expect(result).toEqual(12);
});

test("2 partial()", () => {
  const prettyJson = partial(JSON.stringify, undefined, null, 2);
});

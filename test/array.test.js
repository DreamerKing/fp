import { forEach, some, every, sort, concat, concatAll, zip, reduce } from "../src/array.js";
import { forEachObject } from "../src/object.js";

const array = [1, 2, 3, 4, 5, 16];
forEach(array, console.log);

const obj = { a: 1, b: 2 };
forEachObject(obj, (key, value) => {
  console.log(key, value);
});

const isBig = every(array, v => v > 7);
console.log(isBig);

const someBig = some(array, v => v > 5);
console.log(someBig);

console.log(sort(array, (a, b) => String(a).localeCompare(String(b))));
console.log(sort(array, (a, b) => a - b));

console.log(
  concat(
    [
      [2, 3, [1, [4]]],
      [5, 6],
    ],
    [2, 3, 10, [0, 60, [80]]],
  ),
);

console.log(
  concatAll([
    [2, 3],
    [1, [4]],
    [5, 6],
    [2, 3, 10, [0, 60, [80]]],
  ]),
);

console.log(zip([1, 2, 3], [2, 1, 5, 2], (l, r) => l + r));
console.log(reduce([1, 2, 3], (a, b) => a + b));
console.log(reduce([1, 2, 3], (a, b) => a + b, 2));

import { extend } from "../src/object.js";

const a = { a: 12 };
const b = { a: 20, b: 23, [Symbol()]: "test" };

Object.defineProperty(b, "c", {
  enumerable: false,
  configurable: false,
  writable: true,
  value: 40,
});

const c = extend(a, b);
console.log(c);
console.log(a === c);

console.log(Object.getOwnPropertyDescriptor(c, "c"));

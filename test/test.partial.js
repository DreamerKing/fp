import { partial } from "../src/function.js";
const prettyJson = partial(JSON.stringify, undefined, null, 2);

const obj1 = { foo: "foo", bar: "bar", baz: "baz" };
const person = { name: "king", age: 20 };
console.log(prettyJson(obj1));
console.log(prettyJson(person));

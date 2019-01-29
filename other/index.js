import Demo, { map, filter } from "../src";
console.log(Demo, "demo", map )

let test = [1, 2, 3];
let result = map(test, (value) => 2 * value);

console.log(result, "map")

console.log(filter(test, (value) => value % 2 == 0))
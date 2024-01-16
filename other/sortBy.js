import { sortBy } from "../src/sortBy";

let fruit = ["cherris", "apples", "banana"];

let t = fruit.sort();

console.log(fruit);
console.log(t);

let t1 = [12, 2, 11, 21, 3];
console.log(t1.sort());

function compare(a, b) {
  return a - b;
}

console.log(t1.sort(compare));

let t2 = [
  { firstName: "aa", lastName: "cc" },
  { firstName: "bb", lastName: "aa" },
  { firstName: "ab", lastName: "ca" },
  { firstName: "ca", lastName: "bc" },
];

console.log(t2.sort(sortBy("lastName")));

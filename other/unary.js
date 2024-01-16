import { unary } from "../src/unary";
console.log(["1", "2", "3"].map(parseInt));
console.log(["1", "2", "3"].map(unary(parseInt)));

import { zip } from "../src/zip";
let t = zip([1, 2, 3], [4, 5, 6, 9], (x, y) => x * y);

console.log(t);

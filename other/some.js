import { some } from "../src/some";
let t1 = some([NaN, 2, NaN], isNaN);
let t2 = some([1, 3, 8], isNaN);

console.log(t1, t2);

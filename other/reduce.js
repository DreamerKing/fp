import { reduce } from '../src/reduce';

/* export const reduce = (array, fn) => {
    let accumlator = 0;
    for(const value of array) {
        accumlator = fn(accumlator, value);
    }
    return [accumlator];
} */

let t = [1, 3, 11, 3, 6];
let r = reduce(t, (a, b) => a + b);
console.log(r);

let s = reduce(t, (a, b) => a * b);
console.log(s);
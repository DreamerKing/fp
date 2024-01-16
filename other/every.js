import { every } from "../src/every";

let t1 = every([NaN, NaN, NaN], isNaN);
let t2 = every([NaN, NaN, 3], isNaN);
console.log(t1, t2);

/* export const every = (arr, fn) => {
    let result = true;
    for(let i = 0, len = arr.length; i < len; i++ ) {
        result = result && fn(arr[i]);
    }
    return result;
} */

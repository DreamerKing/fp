import { memorized } from '../src/memorized'
const factorial = (n) => {
    if (n <= 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


const fastFactorial = memorized((n) => {
    if (n <= 0) {
        return 1;
    }
    return n * fastFactorial(n - 1);
});

let t = fastFactorial(10);
console.log(t);


t = fastFactorial(6);
console.log(t);
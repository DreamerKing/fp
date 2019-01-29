import { pipe } from '../src/pipe';
import { identity } from '../src/identity';

let spiltWithSpace = (str) => str.split(' ');
let count = (array) => array.length;
let oddOrEven = (count) => (count % 2) == 0 ? "Even" : "Odd"

const countWords = pipe(spiltWithSpace, count, oddOrEven);
console.log(countWords('Hello world how are you?'));

const countWords2 = pipe(pipe(spiltWithSpace, count), oddOrEven);
const countWords3 = pipe(spiltWithSpace, identity, count, identity, oddOrEven);

console.log(countWords2('Hello world how are you?'), countWords3('Hello world how are you?'));
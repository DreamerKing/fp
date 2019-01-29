import { partial } from "../src/partial";
import { curry } from '../src/curry';

setTimeout(() => {
    console.log("Task1");
}, 10);


setTimeout(() => {
    console.log("Task2");
}, 10);

const wrapSetTimeOut = (time, fn) => {
    setTimeout(fn, time)
};

const delay10s = curry(wrapSetTimeOut)(10);
delay10s(() => {
    console.log("Task3");
});
delay10s(() => {
    console.log("Task4");
});

let delay20s = partial(setTimeout, undefined, 20);
delay20s(() => console.log("Task X"))

let o = { foo: "bar", bar: "foo" };
console.log(JSON.stringify(o, null, 2));

let prettyJson = partial(JSON.stringify, undefined, null, 2);

console.log(prettyJson(o));
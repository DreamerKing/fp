// 函数柯里化用于创建已经设置好了一个或多个参数的函数。实现的方法与函数绑定一样：使用闭包返回一个函数。区别在于当函数被调用时，返回的函数还需要设置一些传入参数。
// 创建步骤：调用另外一个函数并为它传入要柯里化的函数和必要的参数。
import { curry } from "../src/curry";

/* 
const add = (x, y) => x + y;
const addCurried = x => y => x + y;
console.log(addCurried(2)(3));

const curry2 = (fn) => {
    return function (first) {
        return function (second) {
            return fn(first, second);
        }
    }
}

let autoCurried = curry2(add);
console.log(autoCurried(5)(6));
let curried12 = autoCurried(12);
console.log(curried12(8));
 */

const multiply = (x, y, z) => x * y * z;

/* const curryn = (fn) => {
    if (typeof fn !== 'function') {
        throw Error("No function provied");
    }
    return function curried(...args) {
        return fn.apply(null, args)
    }
};

const multiply2 = curryn(multiply)(4, 3, 2);
console.log(multiply2); */

const curry1 = curry(multiply)(3);
console.log(curry1(2)(3));

const curry2 = curry(multiply)(3, 2);
console.log(curry2(6));

/* const match = curry(function (exp, str) {
    return str.match(exp);
});

const hasNumber = match(/\d+/);

const filter = curry(function (f, arr) {
    return arr.filter(f);
});

const findNumbers = filter(hasNumber);

let hasNumbers = findNumbers(["js", "w3c", "2ha"])
console.log(hasNumbers); */

/* 
let map = curry(function (f, arr) {
    return arr.map(f);
});

let squreAll = map((x) => x * x);

console.log(squreAll([1, 2, 5])); */

/* function curry(fn){
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    }
} */

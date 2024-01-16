/* // 函数
const simple = a => a;

const Simple = {
    // 方法
    simple: a => a
}

console.log(simple(6))
console.log(Simple.simple(2));

let taxRate = 0.2;
const calcTax = (wage) => { return wage * taxRate};

const calcTax2 = (wage, rate) => wage * rate;

console.log("1 calcTax", calcTax(1000));
console.log("1 calcTax2", calcTax2(1000, 0.2));
taxRate = 0.3;
console.log("2 calcTax", calcTax(1000));
console.log("2 calcTax2", calcTax2(1000, 0.2)); */

// 命令式编程
let array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 函数式编程

array.forEach(console.log);

// 简单的纯函数
const double = x => 2 * x;

let global = 2;
// 具有副作用的函数
const bad = x => {
  global = 3;
  return 2 * x;
};

console.log(Math.max(1, 2, 5, 3));

// 1. 存储函数
let fn = () => {};
typeof fn;

// 2. 传递函数
let passFn = fn => {
  return fn;
};

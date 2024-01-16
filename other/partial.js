// 偏函数 通过填充原始函数的部分参数来创建函数
const partial =
  (fn, ...args) =>
  (...moreArgs) =>
    fn(...[...args, ...moreArgs]);

const add3 = (a, b, c) => a + b + c;

const fivePlus = partial(add3, 2, 3);

let result = fivePlus(4);

console.log(result);
const addMore = add3.bind(null, 2, 3);

let t = addMore(12);

console.log(t);

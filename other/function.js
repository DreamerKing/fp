// 定义函数的方式：
// 1. 函数声明 函数声明提升 name属性为函数名
// 2. 函数表达式 匿名函数 name属性为空字符串
/* 
if(condtion){
    function test1(){
        console.log("test1");
        
    }
} else { 
    function test2(){
        console.log("test2");
        
    }
} */

/* var test;
if(condtion){
    test = function(){
        console.log("test1");
        
    }
} else {
    test = function () {
        console.log("test2");

    }
} */

// 递归函数

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const fa = factorial;
factorial = null;
let t = fa(12);
console.log(t);

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    // arguments.callee 指向正在执行的函数的指针，但在严格模式下会报错
    return num * arguments.callee(num - 1);
  }
}

const factorial = function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};

// 匿名函数与闭包
// 闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式是在一个函数内部创建另一个函数。它可以访问三个作用域的变量：1. 自身作用域 2. 父作用域 3. 全局作用域
// 作用域链  当某个函数被调用时,会创建一个执行环境及其相关的作用域链。然后使用arguments和其他命名参数的值来初始化函数的活动对象。但在作用域链中，外部函数的的活动对象始终次于内部函数的活动对象，依次类推，直到作用域链的终点的全局执行环境。
// 作用域链一般包含两个变量对象：本地活动对象和全局变量对象。作用域链的本质是一个执行变量对象的指针列表，它只引用但不包含变量对象。

// 闭包与变量
function createFn() {
  var result = [];
  for (var i = 0; i < 10; i++) {
    result[i] = function () {
      return i;
    };
  }
  return result;
}

// 闭包的副作用： 闭包只能取得包含函数中的任何变量的最后一个值。
function createFn() {
  var result = [];
  for (var i = 0; i < 10; i++) {
    result[i] = (function (num) {
      return i;
    })(i);
  }
  return result;
}

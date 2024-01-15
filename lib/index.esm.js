const bind = (fn, context) => (...args) => fn.apply(context, args);

// 长时脚本制约
// 过长的、过深的嵌套函数调用或者进行大量处理的循环。
// 1. 是否需要同步？数据的处理是否会造成其他运行的阻塞
// 2. 是否要按序完成？
// 使用定时器分割循环 // 数组分块
// 基本思路：为要处理的项目建立一个队列，然后设置定时器取出下一个要处理的项目，接着再设置另外一个定时器。给予其他处理有机会执行，从而避免长时间执行脚本的错误。

function chunk(arrays, fn, ctx, time){
    setTimeout(function(){
        let item = array.shift();
        fn.call(ctx, item);
        if(arrays.length > 0){
            setTimeout(arguments.callee, time);
        }
    }, time);
}

const reduce = (array, fn, initValue) => {
    let accumlator;
    if(initValue != undefined){
       accumlator = initValue; 
    } else {
        accumlator = array[0];
    }

    if(initValue === undefined){
        for(let i = 1; i < array.length; i++){
            accumlator = fn(accumlator, array[i]);
        }
    } else {
        for(let value of array) {
          accumlator = fn(accumlator, value );
        }  
    }
    return [accumlator]
};

const compose = (...fns) => (value) => reduce(fns.reverse(),(acc, fn) => fn(acc), value);

// flatten 拍平数组 将嵌套数组转换为非嵌套的单一数组
const concatAll = (array, fn) => {
    let result = [];
    for(const value of array){
        result.push.apply(result, value);
    }
    return result;
};

// 持值容器
const Container = function(val){
    this.value = val;
};

// 提供静态方法of()隐藏构造函数的调用
Container.of = function(val) {
    return new Container(val)
};

Container.prototype.map = function(fn){
    return Container.of(fn(this.value));
};

const curry = (fn) => {
    if (typeof fn !== 'function') {
        throw Error("No function provied");
    }

    return function curriedFn(...args){
        if(args.length < fn.length){
            return function(...innerArgs){
                let finalArgs = args.concat(innerArgs);
                return curriedFn.apply(null, finalArgs );
            }
        }
        return fn.apply(null, args);
    }
};

const Nothing = function(val){
    this.value = val;
};

Nothing.of = function(val){
    return new Nothing(val);
};

Nothing.map = function (f) {
    return this;
};

const Some = function (val) {
    this.value = val;
};

Some.of = function (val) {
    return new Some(val);
};

Some.map = function (fn) {
    return Some.of(fn(this.value));
};

const Either = {
    Some,
    Nothing
};

const every = (arr, fn) => {
    let result = true;
    for(const value of arr){
        result = result && fn(value);
    }
    return result;
};

const filter = (array, fn) => {
    let result = [];
    for(const value of array){
        fn(value) ? result.push(value): undefined;
    }
    return result;
};

const forEach = (array, fn) => {
    for (const value of array) {
        fn(value);
    }
};

const forEachObject = (o, fn) => {
    for(let p in o){
        if(o.hasOwnProperty(p)){
            fn(p, o[p]);
        }
    }
};

const getType = (varable) => typeof varable;

const identity = (it) => {
    console.log(it);
    return it;   
};

const map = (array, fn) => {
    let result = [];
    for (const value of array) {
        result.push(fn(value));
    }
    return result;
};

const MayBe = function(val){
    this.value = val;
};

MayBe.of = function(val){
    return new MayBe(val);
};

MayBe.prototype.isNothing = function() {
    return (this.value === null) || (this.value === undefined);
};

MayBe.prototype.map = function(fn){
    return this.isNothing()? MayBe.of(null): MayBe.of(fn(this.value));
};

const Monad = function(val){
    this.value = val;
};

Monad.of = function(val){
    return new Monad(val);
};

Monad.prototype.isNothing = function() {
    return (this.value === null) || (this.value === undefined);
};

Monad.prototype.map = function(fn){
    return this.isNothing()? Monad.of(null): Monad.of(fn(this.value));
};

Monad.prototype.join = function(){
    return this.isNothing()? Monad.of(null): this.value;
};

Monad.prototype.chain = function(f){
    return this.map(f).join();
};

const memorized = (fn) => {
    const cache = {};
    return (arg) => cache[arg]||(cache[arg] = fn(arg));
};

const once = (fn) => {
    let done = false;
    return function () {
        return done ? undefined : ((done = true), fn.apply(this, arguments)); 
    }
};

const pipe = (...fns) => (value) => reduce(fns, (acc, fn) => fn(acc), value);

const partial = function(fn, ...partialArgs){
    let args = partialArgs;
    return function(...fullArgs){
        let arg = 0;
        for(let i = 0; i <= args.length && arg < fullArgs.length; i++){
            if(args[i] === undefined){
                args[i] = fullArgs[i++];
            }
        }
        return fn.apply(null, args);
    }
};

const simple = (s) => s;

const some = (arr, fn) => {
    let result = false;
    for(const value of arr){
        result = result || fn(value);
    }
    return result;
};

const sortBy = (property) => {
    return (a, b) => (a[property] < b[property] ? -1 : (a[property] > b[property] ? 1 : 0));
};

const tap = (value) => (fn) => {
    typeof(fn) === 'function' && fn(value), console.log(value);
};

const times = (times, fn) => {
    for(let i =0; i < times; i++){
        fn(i);
    }
};

function throttle(fn, context, time){
    clearTimeout(fn.timer);
    fn.timer = setTimeout(function(){
        fn.call(context);
    }, time);
}

/* 
    如果条件predicate为true,则执行函数fn,否则不执行
*/
const unless = (predicate, fn) => {
 if(!predicate) {
     fn();
 }
};

// 将接受多参数的函数转换为只接受一个参数的函数
const unary = (fn) => fn.length === 1? fn : (arg) => fn(arg);

const zip = (left, right, fn) => {
    let index, results = [];
    let min = Math.min(left.length, right.length);
    for(index = 0; index < min; index++){
        results.push(fn(left[index], right[index]));
    }
    return results;
};

export { Container, Either, MayBe, Monad, bind, chunk, compose, concatAll, curry, every, filter, forEach, forEachObject, getType, identity, map, memorized, once, partial, pipe, reduce, simple, some, sortBy, tap, throttle, times, unary, unless, zip };

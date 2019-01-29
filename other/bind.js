// 函数绑定要创建一个函数，可以在特定的this环境中以指定的参数调用另一函数。它常与回调函数和事件处理程序一起使用，以便将函数作为变量传递保存在代码执行环境中。
// 创建多个闭包可能会使代码难于理解和调试，因此很多库实现了将函数绑定到指定环境的函数：bind
import { bind } from '../src/bind'

const A = {
    message: "A",
    log() {
        console.log(this.message)
    }
}

const B = {
    message: "B"
}

const log = bind(A.log, B);
log();

/*
function bind(fn, context){
    var args = Array.prototype.slice.call(arguments, 2);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    }
} */
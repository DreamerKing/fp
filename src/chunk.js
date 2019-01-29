// 长时脚本制约
// 过长的、过深的嵌套函数调用或者进行大量处理的循环。
// 1. 是否需要同步？数据的处理是否会造成其他运行的阻塞
// 2. 是否要按序完成？
// 使用定时器分割循环 // 数组分块
// 基本思路：为要处理的项目建立一个队列，然后设置定时器取出下一个要处理的项目，接着再设置另外一个定时器。给予其他处理有机会执行，从而避免长时间执行脚本的错误。

export function chunk(arrays, fn, ctx, time){
    setTimeout(function(){
        let item = array.shift();
        fn.call(ctx, item);
        if(arrays.length > 0){
            setTimeout(arguments.callee, time)
        }
    }, time);
}


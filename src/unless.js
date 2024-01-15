/*
    如果条件predicate为false,则执行函数fn,否则不执行
*/
export const unless = (predicate, fn) => {
 if(!predicate) {
     fn();
 }
}
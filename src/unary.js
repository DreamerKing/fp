// 将接受多参数的函数转换为只接受一个参数的函数
export const unary = fn => (fn.length === 1 ? fn : arg => fn(arg));

const sub_fib = (x, a, b) => (x > 0 ? sub_fib(x - 1, b, a + b) : a);
export const fib = x =>
  (function sub_fib(a, b) {
    return x-- > 0 ? sub_fib(b, a + b) : a;
  })(0, 1);

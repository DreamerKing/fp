export const bind =
  (fn, context) =>
  (...args) =>
    fn.apply(context, args);

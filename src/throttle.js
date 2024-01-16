export function throttle(fn, context, time) {
  clearTimeout(fn.timer);
  fn.timer = setTimeout(function () {
    fn.call(context);
  }, time);
}

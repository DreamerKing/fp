import { reduce } from "./reduce";

export const compose =
  (...fns) =>
  value =>
    reduce(fns.reverse(), (acc, fn) => fn(acc), value);

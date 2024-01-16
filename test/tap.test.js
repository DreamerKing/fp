import { tap } from "../src/tap.js";
import { forEach } from "../src/array.js";

test("tap()", () => {
  const array = [1, 2, 3];
  const total = tap(array)(v => v.reduce((a, b) => a + b));

  expect(total).toBe(6);

  forEach(array, v => tap(v)(v => tap(v)));
});

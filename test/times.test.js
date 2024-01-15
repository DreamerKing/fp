import { times } from '../src/times.js'

test('times()', () => {
  let count = 0;
  times(3.2, (i) => {
    count++;
  });
  expect(count).toBe(3);
})

import { forEach } from "../src/array.js";
import { unless } from "../src/unless.js";

test('unless', () => {
    let array = [1,4,3,2,5,3,2,6];
    let expectArr = [1, 3, 5, 3];
    let index = 0;
    forEach(array, (m) => {
        unless(m % 2 == 0, () => {
            index++;
        })
    });
    expect(index).toBe(expectArr.length);
})

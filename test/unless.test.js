import { forEach } from "../src/forEach";
import { unless } from "../src/unless";
let array = [1,4,3,2,5,3,2,6];

test("unless()", () => {
    forEach(array, (m) => {
        unless(m % 2, () => {
            expect(m)
        })
    });
})


import { forEachObject } from "../src/forEach";

test("forEachObject", () => {
    let T = {
        name: "king",
        jop: "frontend"
    };

    forEachObject(T, (key, value) => {
        expect(Object.keys(T).includes(key)).toBe(true);
        expect(T[key]).toEqual(value);
    });
})



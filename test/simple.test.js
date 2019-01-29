import { simple } from "../src/simple";

describe("test simple()", function () {
    it("'hello'== simple(hi)", function () {
        expect(simple('hello')).toEqual('hello');
    });
});
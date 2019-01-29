import { MayBe } from '../src/maybe';

test("MayBe()", ()=> {
    let mb = MayBe.of('hello maybe').map((x) => x.toUpperCase());
    expect(mb.value).toEqual('HELLO MAYBE')
})

test("MayBe.of(null)", () => {
    let mb = MayBe.of(null).map((x) => x.toUpperCase());
    expect(mb.value).toEqual(null)
})
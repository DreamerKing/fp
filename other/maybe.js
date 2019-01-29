import { MayBe } from '../src/maybe';

let result = MayBe.of("King")
    .map((x) => x.toUpperCase())
    .map((x) => `Mr ${x}`);
console.log(result);

let result2 = MayBe.of()
    .map((x) => x.toUpperCase())
    .map((x) => `Mr ${x}`);
console.log(result2);
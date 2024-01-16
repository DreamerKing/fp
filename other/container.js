import { Container } from "../src/container";
// 函子是一个实现了map契约的对象，态射是类型之间的映射，函子是范畴之间的映射。它从一个容器中取出值并将其加工，然后放到一新的容器中。

// [1, 4, 9].map(Math.sqrt)

// let c = Container.of([1, 4, 9]).map(Math.sqrt);
// console.log(c.value);

export class Container {
  value;
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return Container.of(fn(this.value));
  }

  static of(value) {
    return new Container(value);
  }
}

export class Maybe extends Container {
  // 这里需要复写of方法，不然会使用Container.of创建Container类型的对象
  static of(value) {
    return new Maybe(value);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.value));
  }
}

export class Monad extends MayBe {
  join() {
    return this.isNothing() ? Maybe.of(null) : this.value;
  }

  chain(fn) {
    return this.map(fn).join();
  }
}

class Nothing extends Container {
  static of(value) {
    return new Nothing(value);
  }

  map(fn) {
    return this;
  }
}

class Some extends Container {
  static of(value) {
    return new Some(value);
  }

  map(fn) {
    return Some.of(fn(this.value));
  }
}

export const Either = {
  Some,
  Nothing,
};

const test = Container.of(3);
console.log(test);
const containArray = new Container([12, 3]).map(v => v.filter(item => item % 2 == 0));
console.log(containArray);

const maybeString = Maybe.of("test is fun").map(x => x.toUpperCase());
console.log(maybeString);

const maybeString2 = Maybe.of(null).map(x => x.toUpperCase());
console.log(maybeString2);

const some = Some.of("test").map(x => x.toUpperCase());
const none = Nothing.of("yes").map(x => x.toUpperCase());

console.log(some);
console.log(none);

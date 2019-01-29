import { Container } from '../src/container';

let double = (x) => 2 * x;

test('Container()', () => {
    let testValue = new Container(3);
    expect(testValue.value).toEqual(3);

    let testObj = new Container({a: 1});
    expect(testObj.value).toEqual({a: 1});
})

test('Container.of()', () => {
    let testValue = Container.of(3);
    expect(testValue.value).toEqual(3);

    let testObj = Container.of({ a: 1 });
    expect(testObj.value).toEqual({ a: 1 });
 })

test('Container and map', () => {
    let testValue = Container.of(3).map(double);
    expect(testValue.value).toEqual(6);

    let testObj = Container.of(6).map(double).map(double);
    expect(testObj.value).toEqual(24);
})
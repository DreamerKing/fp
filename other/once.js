import { once } from '../src/once'
const doPay = once(() => {
    console.log("pay once is done");
});

doPay();

doPay();
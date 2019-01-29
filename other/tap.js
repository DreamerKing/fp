import { tap } from '../src/tap';
import { forEach } from '../src/forEach';

tap('fun')((it) => console.log("value is ", it));

forEach([1, 2, 3], (a) => {
    tap(a)(() => {
        console.log(a);
    });
});

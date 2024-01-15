export const times = (times, fn) => {
    times = Math.floor(times);
    if (times > 0) {
        for(let i =0; i < times; i++){
            fn(i);
        }
    }
}

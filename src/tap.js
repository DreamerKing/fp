export const tap = (value) => (fn) => {
    console.log(value);
    if (typeof fn === 'function') return fn(value);
    return value;
}



export const reduce = (array, fn) => {
    let accumlator = 0;
    for(const value of array) {
        accumlator = fn(accumlator, value);
    }
    return [accumlator];
}
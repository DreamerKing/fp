export const map = (array, fn) => {
    let result = [];
    for (const value of array) {
        result.push(fn(value));
    }
    return result;
}
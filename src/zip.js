export const zip = (left, right, fn) => {
    let index, results = [];
    let min = Math.min(left.length, right.length);
    for(index = 0; index < min; index++){
        results.push(fn(left[index], right[index]));
    }
    return results;
}

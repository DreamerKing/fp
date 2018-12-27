export const concatAll = (array, fn) => {
    let result = [];
    for(const value of array){
        result.push.apply(result, value);
    }
    return result;
}
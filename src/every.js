export const every = (arr, fn) => {
    let result = true;
    for(const value of arr){
        result = result && fn(value);
    }
    return result;
}
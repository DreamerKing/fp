export const some = (arr, fn) => {
    let result = false;
    for(const value of arr){
        result = result || fn(value);
    }
    return result;
}
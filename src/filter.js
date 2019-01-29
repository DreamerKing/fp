export const filter = (array, fn) => {
    let result = [];
    for(const value of array){
        fn(value) ? result.push(value): undefined;
    }
    return result;
}
// flatten 拍平数组 将嵌套数组转换为非嵌套的单一数组
export const concatAll = (array, fn) => {
    let result = [];
    for(const value of array){
        result.push.apply(result, value);
    }
    return result;
}
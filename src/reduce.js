export const reduce = (array, fn, initValue) => {
    let accumlator;
    if(initValue != undefined){
       accumlator = initValue; 
    } else {
        accumlator = array[0];
    }

    if(initValue === undefined){
        for(let i = 1; i < array.length; i++){
            accumlator = fn(accumlator, array[i]);
        }
    } else {
        for(let value of array) {
          accumlator = fn(accumlator, value );
        }  
    }
    return [accumlator]
}

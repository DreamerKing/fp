export const forEach = (array, fn) => {
    for (const value of array) {
        fn(value)
    }
}

export const forEachObject = (o, fn) => {
    for(let p in o){
        if(o.hasOwnProperty(p)){
            fn(p, o[p])
        }
    }
}
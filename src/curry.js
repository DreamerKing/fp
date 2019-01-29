export const curry = (fn) => {
    if (typeof fn !== 'function') {
        throw Error("No function provied");
    }

    return function curriedFn(...args){
        if(args.length < fn.length){
            return function(...innerArgs){
                let finalArgs = args.concat(innerArgs)
                return curriedFn.apply(null, finalArgs );
            }
        }
        return fn.apply(null, args);
    }
}
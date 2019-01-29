export const partial = function(fn, ...partialArgs){
    let args = partialArgs;
    return function(...fullArgs){
        let arg = 0;
        for(let i = 0; i <= args.length && arg < fullArgs.length; i++){
            if(args[i] === undefined){
                args[i] = fullArgs[i++];
            }
        }
        return fn.apply(null, args);
    }
}
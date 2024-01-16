export const curry = fn => {
  if (typeof fn !== "function") {
    throw Error("No function provied");
  }

  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function (...innerArgs) {
        let finalArgs = args.concat(innerArgs);
        return curriedFn.apply(null, finalArgs);
      };
    }
    return fn.apply(null, args);
  };
};

// 传参是引用类型时会有问题
export const partial = (fn, ...bindArgs) => {
  const finalArs = [...bindArgs];
  const finalArsLen = finalArs.length;
  return (...args) => {
    let index = 0,
      argIndex = 0;
    const fnLen = fn.length;
    while (index < fnLen || index < finalArsLen) {
      // 直到外层参数用完
      if (finalArs[index] == undefined) {
        finalArs[index] = args[argIndex++]; // 填补外层留空参数
      }
      index++;
    }
    finalArs.push(...args.slice(argIndex)); // 将内层剩余的参数添加到末尾
    return fn.apply(null, finalArs);
  };
};

export const partial2 = function (fn, ...partialArgs) {
  let args = partialArgs;
  return function (...fullArgs) {
    let arg = 0;
    for (let i = 0; i <= args.length && arg < fullArgs.length; i++) {
      if (args[i] === undefined) {
        args[i] = fullArgs[i++];
      }
    }
    return fn.apply(null, args);
  };
};

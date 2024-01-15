export const every = (arr, fn) => {
  let result = true;
  for(const value of arr){
      result = result && fn(value);
      if (!result) break;
  }
  return result;
}

export const some = (arr, fn) => {
  let result = false;
  for(const value of arr){
      result = result || fn(value);
      if (result) break;
  }
  return result;
}

export const forEach = (array, fn) => {
  for (const value of array) {
      fn(value)
  }
}

export const map = (array, fn) => {
  const result = [];
  for (const value of array) {
      result.push(fn(value));
  }
  return result;
}

export const filter = (array, fn) => {
  const result = [];
  for(const value of array){
    if (fn(value)) {
      result.push(value);
    }
  }
  return result;
}

export const concatAll = (array, fn) => {
  const result = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...item)
    } else {
      result.push(item)
    }
  }
  return result;
}

export const concat = (...arrays) => {
  const results = [];
  for (const item of arrays) {
    if (Array.isArray(item)) {
      //  results.push(concat(item));
      for (const a of item) {
        if (Array.isArray(a)) {
          results.push(...a);
        } else {
          results.push(a);
        }
      }
    } else {
      results.push(item);
    }
  }
  return results;
}

export const zip = (left, right, fn) => {
  let index, results = [];
  let min = Math.min(left.length, right.length);
  for(index = 0; index < min; index++){
      results.push(fn(left[index], right[index]));
  }
  return results;
}

export const reduce = (array, fn, initValue) => {
  let index = 0, len = array.length;
  if(initValue == undefined){
    initValue = array[0];
    index = 1;
  }

  for (; index < len; index++) {
    initValue = fn(initValue, array[index]);
  }

  return initValue;
}



export const sort = (array, fn) => {
  return [...array].sort(fn);
}
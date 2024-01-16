export const forEachObject = (o, fn) => {
  const keys = Reflect.ownKeys(o);
  for (let p of keys) {
    fn(p, o[p]);
  }
};

export const sortBy = property => {
  return (a, b) => (a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0);
};

export const extend = (target, ...forms) => {
  if (typeof target !== "object" || target == null) target = Object.create(null);
  for (const obj of forms) {
    if (typeof obj !== "object" || obj == null) continue;
    const keys = Reflect.ownKeys(obj);
    for (const key of keys) {
      target[key] = obj[key];
    }
  }
  return target;
};

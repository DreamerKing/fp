export const memorized = fn => {
  const cache = {};
  return arg => cache[arg] || (cache[arg] = fn(arg));
};

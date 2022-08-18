const sumSquares = (arr) => {
  if (arr.length === 0) return 0;

  let total = 0;
  let first = arr.shift();

  if (Array.isArray(first)) {
    total += sumSquares(first);
  }

  if (Number.isInteger(first)) {
    total += first ** 2;
  }

  return total + sumSquares(arr);
};

module.exports = {
  sumSquares,
};

const productOfArray = (arr) => {
  if (arr.length === 1) return arr[0];

  return arr.shift() * productOfArray(arr);
};

module.exports = {
  productOfArray,
};

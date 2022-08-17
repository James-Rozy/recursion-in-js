const all = (array, callbackNum) => {
  if (array.length === 0) return true;

  if (array[0] < callbackNum) {
    array.shift();
    return all(array, callbackNum);
  }

  return false;
};

module.exports = {
  all,
};

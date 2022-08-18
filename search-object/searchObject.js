const contains = (obj, val) => {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], val);
    }

    if (obj[key] === val) return true;
  }

  return false;
};

module.exports = {
  contains,
};

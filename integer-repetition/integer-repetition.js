const replicate = (repeat, num) => {
  if (repeat <= 0) return [];
  return [num].concat(replicate(repeat - 1, num));
};

module.exports = {
  replicate,
};

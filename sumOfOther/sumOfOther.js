module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, rss) => acc + rss);
  return arr.map(num => sum - num);
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArray = [];
  arr.forEach((value, index) => {
    if (value !== -1) newArray.push(index);
  });

  const sortedHeights = newArray
    .map((index) => arr[index])
    .sort((a, b) => a - b);

  newArray.forEach((index, i) => {
    arr[index] = sortedHeights[i];
  });

  return arr;
}

module.exports = {
  sortByHeight,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newstr = "";
  let counter = 1;

  for (let i = 1; i <= str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      counter += 1;
    } else {
      newstr += counter > 1 ? counter + str[i - 1] : str[i - 1];
      counter = 1;
    }
  }

  return newstr;
}

module.exports = {
  encodeLine,
};

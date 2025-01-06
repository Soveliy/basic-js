const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`( )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
};

module.exports = {
  chainMaker,
};

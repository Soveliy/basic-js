const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let result = "";
    let keyIndex = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i += 1) {
      const char = message[i];

      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const keyCode = key[keyIndex % key.length].charCodeAt(0);

        const encryptedChar = String.fromCharCode(
          ((charCode - 65 + (keyCode - 65)) % 26) + 65
        );
        result += encryptedChar;

        keyIndex += 1;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let result = "";
    let keyIndex = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i += 1) {
      const char = message[i];

      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const keyCode = key[keyIndex % key.length].charCodeAt(0);

        const decryptedChar = String.fromCharCode(
          ((charCode - 65 - (keyCode - 65) + 26) % 26) + 65
        );
        result += decryptedChar;

        keyIndex += 1;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

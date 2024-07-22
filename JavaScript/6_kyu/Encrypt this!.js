// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = function (text) {
  let arr = text.split(" ");
  let res = [];
  arr.map((word) => {
    if (word.length === 1) res.push(word.charCodeAt(0));
    if (word.length === 2) res.push(word.charCodeAt(0) + word.slice(1));
    if (word.length > 2)
      res.push(
        word.slice(0, 1).charCodeAt(0) +
          word.slice(word.length - 1) +
          word.slice(2, word.length - 1) +
          word.slice(1, 2),
      );
  });
  return res.join(" ");
};

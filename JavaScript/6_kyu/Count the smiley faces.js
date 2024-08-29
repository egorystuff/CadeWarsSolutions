// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

function countSmileys(arr) {
  if (arr.length === 0) return 0;

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(":") || arr[i].includes(";")) {
      if (arr[i].includes(")") || arr[i].includes("D")) {
        if (arr[i].length === 3) {
          if (arr[i][1] === "-" || arr[i][1] === "~") {
            count++;
          }
        } else if (arr[i].length === 2) {
          count++;
        }
      }
    }
  }

  return count;
}
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));

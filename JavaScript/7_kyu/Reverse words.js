// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let revArr = str.split(" ");
  let revStr = [];

  for (let i = 0; i < revArr.length; i++) {
    revStr.push(revArr[i].split("").reverse().join(""));
  }

  return revStr.join(" ");
}

//========================================================================
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

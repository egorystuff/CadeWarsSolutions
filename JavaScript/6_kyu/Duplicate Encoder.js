// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  const newWord = word.toLowerCase().split("");
  let result = "";
  newWord.forEach((char) => {
    if (newWord.indexOf(char) === newWord.lastIndexOf(char)) {
      result += "(";
    } else {
      result += ")";
    }
  });
  return result;
}

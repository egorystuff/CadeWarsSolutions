// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// orderedCount("Code Wars") == [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
// orderedCount("233312") == [['2', 2], ['3', 3], ['1', 1 ]]

const orderedCount = function (text) {
  const charCount = {};
  for (const char of text) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return Object.entries(charCount)
    .sort((a, b) => text.indexOf(a[0]) - text.indexOf(b[0]))
    .map(([char, count]) => [char, count]);
};

console.log(orderedCount("233312"));

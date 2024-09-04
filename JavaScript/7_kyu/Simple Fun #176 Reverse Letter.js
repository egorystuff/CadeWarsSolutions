// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .filter((char) => /[a-z]/i.test(char))
    .join("");
}

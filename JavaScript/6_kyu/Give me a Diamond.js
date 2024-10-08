// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n) {
  if (n % 2 === 0 || n < 1) return null;

  let firstHalf = [];

  for (let i = 0; i < (n - 1) / 2; i++) {
    firstHalf.push(" ".repeat((n - 1) / 2 - i) + "*".repeat(i * 2 + 1) + "\n");
  }
  return [...firstHalf, "*".repeat(n) + "\n", ...firstHalf.reverse()].join("");
}

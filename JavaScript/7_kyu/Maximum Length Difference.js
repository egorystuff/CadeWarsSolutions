// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  return Math.max(
    Math.max(...a1.map((str) => str.length)) - Math.min(...a2.map((str) => str.length)),
    Math.max(...a2.map((str) => str.length)) - Math.min(...a1.map((str) => str.length)),
  );
}

let s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2));

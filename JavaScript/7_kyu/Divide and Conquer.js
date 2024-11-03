// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  let sumNum = 0;
  let sumStr = 0;

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      sumNum += x[i];
    } else {
      sumStr += Number(x[i]);
    }
  }

  return sumNum - sumStr;
}

function divCon(x) {
  return x.reduce((acc, val) => (typeof val === "number" ? acc + val : acc - Number(val)), 0);
}

console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));

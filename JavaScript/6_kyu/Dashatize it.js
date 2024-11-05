// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  let arrWithDash = [];
  let arrNum = num.toString().replace(/-/g, "").split("");

  arrNum.map((digit, index) => {
    if (parseInt(digit) % 2 === 1) return arrWithDash.push(`-${digit}-`);
    return arrWithDash.push(digit);
  });

  let result = arrWithDash.join("").replace(/--/g, "-").split("");

  return result
    .map((el, index) => {
      if (index === 0 || index === result.length - 1) {
        if (el === "-") return "";

        return el;
      }
      return el;
    })
    .join("");
}

console.log(dashatize(974302));

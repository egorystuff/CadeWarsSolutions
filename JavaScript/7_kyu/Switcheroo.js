// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
  return x.replace(/[ab]/g, (m) => (m === "a" ? "b" : "a"));
}

function switcheroo(x) {
  let arr = x.split("");
  let newArr = [];
  arr.map((letter) => {
    if (letter === "a") {
      newArr.push("b");
    } else if (letter === "b") {
      newArr.push("a");
    } else {
      newArr.push(letter);
    }
  });

  return newArr.join("");
}

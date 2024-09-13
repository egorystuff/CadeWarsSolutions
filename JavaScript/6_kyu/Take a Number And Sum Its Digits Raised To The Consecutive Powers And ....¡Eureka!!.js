// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

function sumDigPow(a, b) {
  let res = [];

  for (let i = a; i <= b; i++) {
    let sum = 0;
    let num = i.toString();
    for (let j = 0; j < num.length; j++) {
      sum += Math.pow(parseInt(num[j]), j + 1);
    }
    if (sum == i) {
      res.push(sum);
    }
  }

  return res;
}

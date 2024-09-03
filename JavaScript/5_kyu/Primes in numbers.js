// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
function primeFactors(n) {
  let factors = {};
  let i = 2;
  while (i * i <= n) {
    if (n % i !== 0) {
      i += 1;
    } else {
      n /= i;
      factors[i] = (factors[i] || 0) + 1;
    }
  }
  if (n > 1) {
    factors[n] = (factors[n] || 0) + 1;
  }
  return Object.keys(factors)
    .sort((a, b) => a - b)
    .map((key) => {
      let value = factors[key];
      return value === 1 ? `(${key})` : `(${key}**${value})`;
    })
    .join("");
}

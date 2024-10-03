// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

// Example:
// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language.

function getCombinations(arr, k) {
  if (k === 1) return arr.map((x) => [x]);
  const combinations = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    const subCombinations = getCombinations(arr.slice(i + 1), k - 1);
    subCombinations.forEach((subCombination) => {
      combinations.push([arr[i]].concat(subCombination));
    });
  }
  return combinations;
}

function chooseBestSum(t, k, ls) {
  if (t < k || k < 1 || ls.length < k) return null;
  const combinations = getCombinations(ls, k);
  const bestSum = combinations.reduce((best, combination) => {
    const sum = combination.reduce((a, b) => a + b, 0);
    return sum <= t && sum > best ? sum : best;
  }, 0);

  return bestSum === 0 ? null : bestSum;
}

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// function expandedForm(num) {
//   let result = [];
//   let str = num.toString();
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== "0") {
//       result.push(arr[i] + "0".repeat(arr.length - i - 1));
//     }
//   }
//   return `${result.join(" + ")}`;
// }

function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((digit, index) => {
      if (digit !== "0") {
        return digit + "0".repeat(num.toString().length - index - 1);
      }
      return "";
    })
    .filter(Boolean)
    .join(" + ");
}

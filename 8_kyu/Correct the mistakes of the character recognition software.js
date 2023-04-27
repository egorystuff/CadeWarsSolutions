// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
  let arr = Array.from(string);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '5') arr[i] = 'S';
    if (arr[i] === '0') arr[i] = 'O';
    if (arr[i] === '1') arr[i] = 'I';
  }

  return arr.join('');

  // your code here
}

let deepEqual = correct('51NGAP0RE');

let value = deepEqual;
console.log(value);

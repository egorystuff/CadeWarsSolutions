// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  let shouldBe = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      shouldBe = shouldBe.concat(friends[i]);
    } else {
      continue;
    }
  }

  return shouldBe;
}

let value = friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']);
console.log(value);

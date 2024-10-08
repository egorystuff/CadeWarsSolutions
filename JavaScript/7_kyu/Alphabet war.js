// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

function alphabetWar(fight) {
  const powerMapLeft = { w: 4, p: 3, b: 2, s: 1 };
  const powerMapRight = { m: 4, q: 3, d: 2, z: 1 };
  const leftSidePower = fight
    .split("")
    .filter((letter) => powerMapLeft.hasOwnProperty(letter))
    .reduce((total, letter) => total + powerMapLeft[letter], 0);

  const rightSidePower = fight
    .split("")
    .filter((letter) => powerMapRight.hasOwnProperty(letter))
    .reduce((total, letter) => total + powerMapRight[letter], 0);

  console.log(leftSidePower, rightSidePower);

  if (leftSidePower > rightSidePower) {
    return "Left side wins!";
  } else if (leftSidePower < rightSidePower) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(f) {
  return f ? f(0) : 0;
}
function one(f) {
  return f ? f(1) : 1;
}
function two(f) {
  return f ? f(2) : 2;
}
function three(f) {
  return f ? f(3) : 3;
}
function four(f) {
  return f ? f(4) : 4;
}
function five(f) {
  return f ? f(5) : 5;
}
function six(f) {
  return f ? f(6) : 6;
}
function seven(f) {
  return f ? f(7) : 7;
}
function eight(f) {
  return f ? f(8) : 8;
}
function nine(f) {
  return f ? f(9) : 9;
}

function plus(y) {
  return function (x) {
    return x + y;
  };
}
function minus(y) {
  return function (x) {
    return x - y;
  };
}
function times(y) {
  return function (x) {
    return x * y;
  };
}
function dividedBy(y) {
  return function (x) {
    return Math.floor(x / y);
  };
}

console.log(seven(times(five())));

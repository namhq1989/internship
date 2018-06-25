/*
Write a JavaScript program to check from two given integers,
if one is positive and one is negative.
*/
function positiveNegative(a, b) {
  return ((a < 0 && b > 0) || (a > 0 && b < 0));
}

// Demo
console.log(positiveNegative(10, 20));
console.log(positiveNegative(10, -20));
console.log(positiveNegative(-10, 20));

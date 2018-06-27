/*
Write a JavaScript program to check if two numbers are in range 40..60
 or in the range 70..100 inclusive.
*/

function checkNum(a, b) {
  if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) || (a >= 70 && a <= 100 && b >= 70 && b <= 100)) {
    return true;
  }
  return false;
}

// Demo
console.log(checkNum(50, 54));
console.log(checkNum(70, 95));
console.log(checkNum(100, 54));

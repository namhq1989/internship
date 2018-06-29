/*
Write a JavaScript program to find the larger number from the two given positive integers,
the two numbers are in the range 40..60 inclusive.
 */

function maxTownumRange(a, b) {
  if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
    let max = 0;
    if (a > b) {
      max = a;
    } else {
      max = b;
    }
    return max;
  }
  return false;
}

// Demo
console.log(maxTownumRange(50, 45));
console.log(maxTownumRange(70, 45));

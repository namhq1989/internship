/*
Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive).
Return true if either of them are in the said range.
 */

function checkNumber(a, b) {
  if ((a >= 50 && a <= 90) || (b >= 50 && b <= 90)) {
    return true;
  }
  return false;
}

// Demo
console.log(checkNumber(50, 12));
console.log(checkNumber(35, 12));
console.log(checkNumber(100, 10));

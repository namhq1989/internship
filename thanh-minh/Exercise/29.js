/*
Write a JavaScript program to check if three given integer values are in the range 50..99
(inclusive). Return true if one or more of them are in the said range
*/

function checkNumber(a, b, c) {
  if ((a >= 50 && a <= 90) || (b >= 50 && b <= 90) || (c >= 50 && c <= 90)) {
    return true;
  }
  return false;
}

// Demo
console.log(checkNumber(50, 12, 99));
console.log(checkNumber(35, 12, 102));
console.log(checkNumber(100, 10, 60));

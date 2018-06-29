/*
Write a JavaScript program to check two given non-negative integers
and if one of the number (not both) is multiple of 7 or 11
*/
function checkNumber(a, b) {
  if (a < 0 || b < 0) {
    return false;
  }
  if (a % 7 === 0 || a % 11 === 0) {
    if (b % 7 === 0 || b % 11 === 0) {
      return false;
    }
    return true;
  }
  if (b % 7 === 0 || b % 11 === 0) {
    return true;
  } return false;
}

// demo
console.log(checkNumber(11, 7));
console.log(checkNumber(17, 7));
console.log(checkNumber(25, 23));

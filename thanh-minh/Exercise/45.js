/*
Write a JavaScript program to check two given integer values
and return true if one of the number is 15 or if their sum or difference is 15.
*/

function check15(a, b) {
  if (a === 15 || b === 15) {
    return true;
  }
  if (a + b === 15 || Math.abs(a - b) === 15) {
    return true;
  }
  return false;
}

// demo
console.log(check15(15, 20));
console.log(check15(5, 10));
console.log(check15(20, 5));
console.log(check15(1, 3));

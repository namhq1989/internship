/*
Write a JavaScript program to check from two given integers
if either one is 8 or their sum or difference is 8.
 */
function check8(a, b) {
  if (a === 8 || b === 8) {
    return true;
  }
  if (a + b === 8 || Math.abs(a - b) === 8) {
    return true;
  }
  return false;
}

// Demo
console.log(check8(4, 4));
console.log(check8(8, 5));
console.log(check8(18, 10));
console.log(check8(2, 5));

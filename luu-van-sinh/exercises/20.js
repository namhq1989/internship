/*
  check from two given integers, if one is positive and one is negative
*/

function positive_negative(a = 0, b = 0) {
  return (a * b < 0);
}

// Example
console.log(positive_negative(2, 2))
console.log(positive_negative(-2, 2))
console.log(positive_negative(2, -2))
console.log(positive_negative(-2, -2))
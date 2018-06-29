/*
Write a JavaScript program to check two given numbers and return true if one of the number is 50
 or if their sum is 50.
*/

function test50(a, b) {
  return ((a === 50 || b === 50) || (a + b === 50));
}

// Demo
console.log(test50(20, 30));
console.log(test50(50, 10));
console.log(test50(20, 10));

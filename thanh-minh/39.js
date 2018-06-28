/*
Write a JavaScript program to compute the sum of the two given integers,
If the sum is in the range 50..80 return 65 other wise return 80.
 */
function sortaSum(a, b) {
  if (((a + b) >= 50) && ((a + b) <= 80)) {
    return 65;
  }
  return 80;
}

// Demo
console.log(sortaSum(30, 50));
console.log(sortaSum(12, 5));
console.log(sortaSum(30, 60));

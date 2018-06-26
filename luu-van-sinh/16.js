/*
   Compute the sum of the two given integers.
   If the two values are same, then returns triple their sum.
*/
function getSum(a = 0, b = 0) {
  return (a === b) ? 3 * (a + b) : a + b
}

// Example
console.log(getSum(4, 4))
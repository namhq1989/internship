/*
 Write a JavaScript program to compute the sum of the two given integers.
 If the two values are same, then returns triple their sum.
*/

function sumTriple(a, b) {
  if (a === b) {
    return 3 * (a + b);
  }
  return (a + b);
}

// Demo
console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));

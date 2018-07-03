/**
 * Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.
 */
function testArr(arr) {
  if (arr.length === 2) {
    if (arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1) {
      return true;
    }
    return false;
  }
  return false;
}

// Demo
console.log(testArr([1, 2]));
console.log(testArr([2, 4]));
console.log(testArr([2, 4, 4]));
console.log(testArr([2, 3]));

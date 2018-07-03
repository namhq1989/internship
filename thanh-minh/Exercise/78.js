/**
 *Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.
 */
function testArray(arr) {
  if (arr.length === 2) {
    if (arr.indexOf(1) === -1 && arr.indexOf(3) === -1) {
      return true;
    }
    return false;
  }
  return false;
}

// Demo
console.log(testArray([1, 2]));
console.log(testArray([6, 5]));
console.log(testArray([1, 2, 5, 7]));

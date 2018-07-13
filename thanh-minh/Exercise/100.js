/*
Write a JavaScript program to check if there is at least one element
 which occurs in two given sorted arrays of integers.
 */
function checkElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i])) {
      return true;
    }
  }
  return false;
}

// Demo
console.log(checkElement([2, 4, 6, 8], [3, 5, 4, 6, 7]));
console.log(checkElement([2, 4, 6, 8], [3, 5, 9, 11, 7]));

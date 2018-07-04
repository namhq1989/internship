/**
 * Write a JavaScript program to check whether two arrays of integers of same length
 * are similar or not. The arrays will be similar if one array can be obtained from another array
 *  by swapping at most one pair of elements.
 */

function sortArr(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
function arrayChecking(arr1, arr2) {
  if (arr1.length === arr2.length) {
    arr1 = sortArr(arr1);
    arr2 = sortArr(arr2);
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
}

// Demo

console.log(arrayChecking([1, 2, 3, 4], [1, 3, 5, 2]));
console.log(arrayChecking([1, 2, 3, 4], [1, 3, 4, 2]));

/*
Write a JavaScript program to find the number of inversions of a given array of integers.
*/
function inversions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) {
        count += 1;
      }
    }
  }
  return count;
}

// Demo
console.log(inversions([2, 5, 3, 4, 10]));
console.log(inversions([2, 3, 5, 7, 10]));

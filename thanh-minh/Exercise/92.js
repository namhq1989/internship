/*
Write a JavaScript program to find the maximal difference between any two adjacent elements
 of a given array of integers
*/

function maxDifference(arr) {
  let max = 0;
  let temp;
  for (let i = 0; i < arr.length - 1; i += 1) {
    temp = Math.abs(arr[i + 1] - arr[i]);
    max = Math.max(temp, max);
  }
  return max;
}

// Demo
console.log(maxDifference([3, 5, 6, 7, 2]));

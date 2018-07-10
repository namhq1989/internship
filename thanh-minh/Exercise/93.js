/*
Write a JavaScript program to find the maximal
difference among all possible pairs of a given array of integers
*/
function arrayMaxDifference(array) {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j !== i && j < array.length; j += 1) {
      temp = Math.abs(array[i] - array[j]);
      max = Math.max(max, temp);
    }
  }
  return max;
}

// Demo
console.log(arrayMaxDifference([2, 4, 5, 3, 7]));
console.log(arrayMaxDifference([2, 4, 5, 10, 7]));

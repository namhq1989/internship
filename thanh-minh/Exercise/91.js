/*
 Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers
  (numbers that follow each other in order.) of a given array of positive integers
*/
function arrayMaxConsecutiveSum(array, k) {
  let temp = 0;
  for (let i = 0; i < k - 1; i += 1) {
    temp += array[i];
  }
  for (let j = 0; j < array.length; i += 1) {

  }

  return temp;
}

// Demo
console.log(arrayMaxConsecutiveSum([1, 2, 3, 7, 4], 5));

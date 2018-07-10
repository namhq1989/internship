/*
 Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers
  (numbers that follow each other in order.) of a given array of positive integers
*/
function arrayMaxConsecutiveSum(array, k) {
  let temp = 0;
  let result = 0;
  for (let i = 0; i < k - 1; i += 1) {
    temp += array[i];
  }
  for (let j = k - 1; j < array.length; j += 1) {
    temp += array[j];
    if (temp > result) {
      result = temp;
    }
    result -= array[j - k + 1];
  }
  return result;
}

// Demo
console.log(arrayMaxConsecutiveSum([1, 2, 3, 14, 5], 2));

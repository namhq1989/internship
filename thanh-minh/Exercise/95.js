/**
 *Write a JavaScript program to replace all the numbers
  with a specified number of a given array of integers.
 */
function replaceNumbers(nums, oldNum, newNum) {
  for (let i = 0; i <= nums.length - 1; i += 1) {
    if (nums[i] === oldNum) {
      nums[i] = newNum;
    }
  }
  return nums;
}

// demo
console.log(replaceNumbers([1, 2, 5, 5, 6, 5], 5, 7));
console.log(replaceNumbers([1, 2, 5, 5, 6, 5], 5, 0));

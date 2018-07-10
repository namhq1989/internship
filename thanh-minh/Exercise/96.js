/**
 *Write a JavaScript program to compute the sum of absolute differences of
 consecutive numbers of a given array of integers
 */
function sumAbsDiff(nums) {
  let temp = Math.abs(nums[0] - nums[nums.length - 1]);
  for (let i = 1; i < nums.length; i += 1) {
    temp += Math.abs(nums[i] - nums[i - 1]);
  }
  return temp;
}

// Demo
console.log(sumAbsDiff([1, 3, 5, 6, 10]));
console.log(sumAbsDiff([1, 2, 3, 2, -5]));

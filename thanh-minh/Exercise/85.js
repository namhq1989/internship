/*
Write a JavaScript code to divide an given array of positive integers into two parts.
First element goes to first part, second element goes to second part,
 and third element goes to first part and so on.
Now compute the sum of two parts and store into an array of size two
*/
function alternateSums(nums) {
  const arr = [];
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      sum1 += nums[i];
    } else {
      sum2 += nums[i];
    }
  }
  arr.push(sum1, sum2);
  return arr;
}

// Demo
console.log(alternateSums([1, 2, 3, 4, 5, 6]));

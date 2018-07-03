/**
 *Write a JavaScript program to find the larger value between the first or last and
  set all the other elements with that value. Display the new array.
 */
function numsMaxArray(arr) {
  if (arr.length >= 3) {
    const maxNums = arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = maxNums;
    }
    return arr;
  }
  return false;
}

// Demo
console.log(numsMaxArray([1, 2, 4, 5, 6]));
console.log(numsMaxArray([4, 2, 4, 5, 1]));

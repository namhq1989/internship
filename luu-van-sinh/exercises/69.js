/**
 * Write a JavaScript program to compute the sum of three elements of a given array 
 * of integers of length 3.
 */
const getSumArray = (arr = []) => {
    if (arr.length !== 3) {
        return false
    }
    return arr[0] + arr[1] + arr[2]
}
// Example
console.log(getSumArray([1, 3, 5]));
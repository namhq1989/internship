/**
 * Write a JavaScript program to check if 1 appears in first or last position of a given 
 * array of integers. The array length must be greater or equal to 1.
 */
const check1 = (arr = []) => {
    if (arr.length === 0) {
        return false
    }
    return (arr[0] === 1 || arr[arr.length - 1] === 1)
}
// Example
console.log(check1([2, 3, 1]));
console.log(check1([3, 4, 5]));
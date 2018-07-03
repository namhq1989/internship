/**
 * Write a JavaScript program to check if the first and last elements are equal of a given 
 * array of integers length 3.
 */
const firstEqualLast = (arr = []) => {
    if (arr.length === 0) {
        return false
    }
    return (arr[0] === arr[arr.length - 1])
}
// Example
console.log(firstEqualLast([1, 3, 4, 1]));
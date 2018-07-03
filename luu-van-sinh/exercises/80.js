/**
 * Write a JavaScript program to swap the first and last elements of a given array of integers. 
 * The array length should be at least 1.
 */
const swapFirstAndLastElements = (a = []) => {
    let last = a[a.length - 1]
    a[a.length - 1] = a[0]
    a[0] = last
    return a
}
// Example
console.log(swapFirstAndLastElements([1, 2, 3, 4]));
/**
 * Write a JavaScript program to find the kth greatest element of a given array of integers
 */
const greatest = (a = [], k) => {
    return a.sort((x, y) => y - x)[k - 1]
}
// Example
console.log(greatest([23, 54, 11, 66, 0], 1));
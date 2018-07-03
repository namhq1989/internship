/**
 * Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.
 */
const checkArray = (a = []) => {
    return (a.indexOf(1) > -1 || a.indexOf(3) > -1)
}
// Example
console.log(checkArray([2, 5, 4]));
console.log(checkArray([1, 2, 5]));
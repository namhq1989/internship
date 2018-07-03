/**
 * Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3. 
 */
const checkArray = (a = []) => {
    return (a.indexOf(1) === -1 && a.indexOf(3) === -1)
}
// Example
console.log(checkArray([3, 5, 6]));
console.log(checkArray([7, 8, 9]));
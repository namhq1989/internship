/**
 * Write a JavaScript program to check from three given numbers (non negative integers) 
 * that two or all of them have the same rightmost digit. 
 */
const checkNumber = (a = 0, b = 0, c = 0) => {
    if (a < 0 || b < 0 || c < 0) {
        return false
    }
    return (a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10)
}
// Example
console.log(checkNumber(10, 200, 5));
console.log(checkNumber(1, 2, 3));
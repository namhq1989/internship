/**
 * Write a JavaScript program to check two given non-negative integers and if 
 * one of the number (not both) is multiple of 7 or 11
 */
const checkMultipleTwoNums = (a = 0, b = 0) => {
    if (a < 0 || b < 0) {
        return false
    }
    return ((isMultiple(a) ^ isMultiple(b)) === 0) ? false : true
}
const isMultiple = (n) => {
    return (n % 7 === 0 || n % 11 === 0)
}
// Example
console.log(checkMultipleTwoNums(14, 11));
console.log(checkMultipleTwoNums(14, 10));
console.log(checkMultipleTwoNums(1, 15));
/**
 * Write a JavaScript program to check two given integer values and return true if 
 * one of the number is 15 or if their sum or difference is 15
 */
const checkNumber = (a = 0, b = 0) => {
    return (is15(a) || is15(b) || is15(a + b) || is15(Math.abs(a - b)))
}
const is15 = (num) => {
    return (num === 15)
}

// Example
console.log(checkNumber(15, 1));
console.log(checkNumber(14, 1));
console.log(checkNumber(100, 85));
console.log(checkNumber(10, 5));
console.log(checkNumber(12, 1));
/**
 * Write a JavaScript program to check from two given integers if either one is 8 or 
 * their sum or difference is 8.
 */
const check8 = (a = 0, b = 0) => {
    if (a === 8 || b === 8) {
        return true
    }
    return ((a + b === 8) || Math.abs(a - b) === 8)
}
// Example
console.log(check8(3, 5))
console.log(check8(8, 5))
console.log(check8(3, 11))
console.log(check8(3, 4))
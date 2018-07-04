/**
 * Write a JavaScript program to add two digits of a given positive integer of length two.
 */
const addDigits = (number = 0) => {
    let sum = number % 10
    while (number >= 10) {
        number = Math.floor(number / 10)
        sum += number % 10
    }
    return sum
}
// Example
console.log(addDigits(123));
console.log(addDigits(23));
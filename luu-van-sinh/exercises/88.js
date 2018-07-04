/**
 * Write a JavaScript program to check whether two given integers are similar or not, if a given 
 * divisor divides both integers and it does not divide either.
 */
const checkNumber = (a = 1, b = 1, divisor) => {
    return ((a % divisor === 0 && b % divisor === 0) ||
        (a % divisor !== 0 && b % divisor !== 0))
}
// Example
console.log(checkNumber(10, 25, 5));
console.log(checkNumber(10, 24, 5));